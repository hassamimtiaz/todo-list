import { createContext, useContext, useState, useEffect } from 'react'
import { loadFromStorage, saveToStorage } from '../utils/localStorage'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    loadFromStorage('darkMode', false)
  )

  useEffect(() => {
    saveToStorage('darkMode', isDarkMode)
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 