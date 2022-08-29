import type { NextPage } from "next";
import { Cards } from "../components/Cards";
import { SearchForm } from "../components/SearchForm";

const Home: NextPage = () => {
  const userInfos = [
    { id: 1, name: "Tom" },
    {
      id: 2,
      name: "Mary",
    },
    {
      id: 3,
      name: "Bob",
    },
  ];

  const onSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <Cards userInfos={userInfos} />
    </div>);
};
export default Home;