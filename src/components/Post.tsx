import React, { useState } from "react";
import { Post as PostType, User, Comment as CommentType } from "../types";
import Comment from "./Comment";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Collapse,
} from "@mui/material";
import { motion } from "framer-motion";

interface PostProps {
  post: PostType;
  user: User | undefined;
  comments: CommentType[];
}

const Post: React.FC<PostProps> = ({ post, user, comments }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card variant="outlined" style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h5">{post.title}</Typography>
          <Typography variant="subtitle1">By {user?.name}</Typography>
          <Typography variant="body1">{post.body}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setShowComments(!showComments)}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </Button>
        </CardActions>
        <Collapse in={showComments} timeout="auto" unmountOnExit>
          <CardContent>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </motion.div>
  );
};

export default Post;
