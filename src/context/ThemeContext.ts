import { PaletteMode } from "@mui/material";
import { createContext } from "react";

interface ThemeContextType {
    toggleTheme: () => void;
    mode: PaletteMode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);