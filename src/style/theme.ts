import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import { pink, teal } from "@mui/material/colors";

const opts: ThemeOptions = {
    palette: {
        primary: {
            main: teal[700],
        },
        secondary: {
            main: pink[500],
        }
    }
}

export function createCustomTheme(mode: PaletteMode) {
    return createTheme({
        ...opts,
        palette: {
            mode: mode,
        }
    })
}