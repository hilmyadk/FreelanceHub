import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? '🌙' : '☀️'}
        </div>
      </div>
    </button>
  );
}

export default ThemeToggle;
