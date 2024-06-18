import React from "react";
import { Post as PostType, User, Comment as CommentType } from "../types";
import Post from "./Post";
import { Container } from "@mui/material";

interface PostListProps {
  posts: PostType[];
  users: User[];
  comments: CommentType[];
}

const PostList: React.FC<PostListProps> = ({ posts, users, comments }) => {
  const getUserById = (userId: number) =>
    users.find((user) => user.id === userId);

  return (
    <Container maxWidth="md">
      {posts.map((post) => {
        const user = getUserById(post.userId);
        const postComments = comments.filter(
          (comment) => comment.postId === post.id
        );

        return user ? (
          <Post key={post.id} post={post} user={user} comments={postComments} />
        ) : null;
      })}
    </Container>
  );
};

export default PostList;
