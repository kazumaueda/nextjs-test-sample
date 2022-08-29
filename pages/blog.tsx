import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BlogPage: NextPage = () => {
  const [postDate, setPostDate] = useState<Post>();

  const getPost = async (): Promise<Post> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return response.data;
  };

  useEffect(() => {
    try {
      const getDate = async () => {
        const result = await getPost();
        setPostDate(result);
      };
      getDate();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {!postDate ? (
        <p>Loading...</p>
      ) : (
        <p>
          ID:{postDate.id}:{postDate.title}
        </p>
      )}
    </div>
  );
};

export default BlogPage;