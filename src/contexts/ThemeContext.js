import { createContext, useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../Style/theme'

export const ThemeContext = createContext()

const CustomThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const storageValue = localStorage.getItem('theme')

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return light
        }
    })

    const toggleTheme = useCallback(() => {
        return setTheme(theme.title === 'light' ? dark : light)
    }, [theme])

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return(
        <ThemeContext.Provider value={{ toggleTheme, theme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default CustomThemeProvider