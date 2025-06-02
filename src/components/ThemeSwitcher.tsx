import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-black/5 transition-colors"
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-themed-foreground" />
      ) : (
        <Sun className="w-5 h-5 text-themed-foreground" />
      )}
    </button>
  );
};

export default ThemeSwitcher;