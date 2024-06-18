import { useState, useEffect } from "react";
import axios from "axios";
import { Post, User, Comment } from "../types";

const useFetchData = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsResponse, usersResponse, commentsResponse] =
          await Promise.all([
            axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts"),
            axios.get<User[]>("https://jsonplaceholder.typicode.com/users"),
            axios.get<Comment[]>(
              "https://jsonplaceholder.typicode.com/comments"
            ),
          ]);
        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, users, comments, loading, error };
};

export default useFetchData;
