import React from "react";
import { Comment as CommentType } from "../types";
import { Card, CardContent, Typography } from "@mui/material";

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => (
  <Card variant="outlined" style={{ marginBottom: "10px" }}>
    <CardContent>
      <Typography variant="subtitle1">{comment.name}</Typography>
      <Typography variant="body2">{comment.body}</Typography>
    </CardContent>
  </Card>
);

export default Comment;
