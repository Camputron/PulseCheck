import { createTheme, PaletteMode, ThemeOptions } from "@mui/material"
import { pink, teal } from "@mui/material/colors"

const opts = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode: mode,
    primary: {
      main: teal[700],
    },
    secondary: {
      main: pink[500],
    },
  },
})

export function createCustomTheme(mode: PaletteMode) {
  return createTheme(opts(mode))
}
