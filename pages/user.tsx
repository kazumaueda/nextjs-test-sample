import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const UserPage: NextPage = () => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>("");

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const userInfo = {
        id: response.data.id,
        name: response.data.name,
        username: response.data.username,
        email: response.data.email,
      };
      setUser(userInfo);
    } catch (e) {
      setError("Request failed");
    }
  };

  return (
    <div>
      {!user && !error && (
        <>
          <p>no data</p>
          <button onClick={getUser}>get user data</button>
        </>
      )}
      {user && <h4>name: {user.name}</h4>}
      {error && <p data-testid="error">{error}</p>}
    </div>
  );
};

export default UserPage;