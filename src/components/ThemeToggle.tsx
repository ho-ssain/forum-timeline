import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  const theme = useTheme();
  const isDarkMode = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
      label="Dark Mode"
      labelPlacement={isDarkMode ? "end" : "start"}
    />
  );
};

export default ThemeToggle;
