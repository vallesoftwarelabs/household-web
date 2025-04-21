import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './layout.css'; // Assuming layout.css contains necessary styles

const ThemeSwitch = () => {
  // Use state to manage the theme mode
  const [isDarkMode, setIsDarkMode] = useState(false); 

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    // In a real application, you would also trigger theme changes here
    // (e.g., updating CSS variables, saving preference)
  };

  return (
    // Add onClick handler to the main div
    <div 
      className={`theme-switch ${isDarkMode ? 'dark' : 'light'}`} 
      onClick={toggleTheme} // Attach the handler
      role="switch" // Add role for accessibility
      aria-checked={isDarkMode} // Indicate the state for screen readers
      tabIndex={0} // Make it focusable
      onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? toggleTheme() : null} // Allow toggling with Enter/Space
    >
      <div className="theme-switch-track">
        <div className="theme-switch-thumb">
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