import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  )
} 