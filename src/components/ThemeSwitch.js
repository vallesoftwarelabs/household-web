import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import './layout.css'; // Assuming layout.css contains necessary styles

const ThemeSwitch = () => {
  // Get theme state and toggle function from context
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    // onClick still uses toggleTheme, now from context
    <div 
      className={`theme-switch ${isDarkMode ? 'dark' : 'light'}`} 
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDarkMode}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? toggleTheme() : null}
    >
      <div className="theme-switch-track">
        <div className="theme-switch-thumb">
          {/* Icon depends on isDarkMode from context */}
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        </div>
        {/* Icons inside the track for visual representation */}
        <FontAwesomeIcon icon={faSun} className="sun-icon" />
        <FontAwesomeIcon icon={faMoon} className="moon-icon" />
      </div>
    </div>
  );
};

export default ThemeSwitch; 