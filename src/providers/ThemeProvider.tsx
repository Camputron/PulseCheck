import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import {
	ThemeProvider as MuiThemeProvider,
	PaletteMode
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { createCustomTheme } from '../style/theme'
import { ThemeContext } from '../context/ThemeContext'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	/* detect system preference */
	// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const prefersDarkMode = false

	/* state for theme mode, defaulting to system preference */
	const [mode, setMode] = useState<PaletteMode>(
		prefersDarkMode ? 'dark' : 'light'
	)

	useEffect(() => {
		setMode(prefersDarkMode ? 'dark' : 'light')
	}, [prefersDarkMode]) // update when system theme changes

	const toggleTheme = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
	}

	const theme = useMemo(() => createCustomTheme(mode), [mode])

	return (
		<ThemeContext.Provider value={{ toggleTheme, mode }}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	)
}
