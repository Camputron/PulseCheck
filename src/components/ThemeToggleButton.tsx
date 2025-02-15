import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "../hooks/useThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <div>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </div>
  );
};

export default ThemeToggleButton;
