import React from "react";

type User = {
  id: number;
  name: string;
};

type CardsProps = {
  userInfos: User[];
};

export const Cards: React.FC<CardsProps> = ({ userInfos }) => {
  return (
    <>
      {userInfos.length === 0 ? (
        <p>user info is zero</p>
      ) : (
        <ul>
          {userInfos.map((userInfo) => (
            <li key={userInfo.id}>
              <span>id:{userInfo.id} name:{userInfo.name}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};