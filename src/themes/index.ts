import { createTheme, ThemeProvider } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1c1c1c",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
});

export { ThemeProvider };
