import React, { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import PostList from "./components/PostList";
import ThemeToggle from "./components/ThemeToggle";
import ErrorBoundary from "./ErrorBoundary";
import { lightTheme, darkTheme, ThemeProvider } from "./themes";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

const App: React.FC = () => {
  const { posts, users, comments, loading, error } = useFetchData();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ErrorBoundary
        fallback={<div>Something went wrong. Please try again later.</div>}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Forum Timeline
            </Typography>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" style={{ marginTop: "20px" }}>
          {error ? (
            <div>{error}</div>
          ) : (
            <PostList posts={posts} users={users} comments={comments} />
          )}
        </Container>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
