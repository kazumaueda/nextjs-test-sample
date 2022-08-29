import React, { useState } from "react";

type SearchFormProps = {
  onSubmit: (value: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (!value) {
      console.log("input is empty");
    }

    onSubmit(value);
  };

  return (
    <div>
      <input type="text" onChange={onchange} value={value} />
      <button onClick={onClick}>Search</button>
    </div>
  );
};