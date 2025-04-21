import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logoImage from '../images/logo.svg'; // Import the logo image
import logoDarkImage from '../images/logo-dark.svg'; // Import the dark mode logo image
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook
import ThemeSwitch from './ThemeSwitch'; // Import the ThemeSwitch component

// Removing the Button component since we won't use it

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between; // Changed to space-between
  align-items: center; // Changed to center alignment vertically
  padding: 1rem 3rem;
  background-color: var(--color-features-bg); /* Use features background */
  color: var(--color-text); /* Use CSS variable for text too */
  border-bottom: 1px solid var(--color-border, #eee); /* Use variable with fallback */
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; /* Add transitions */

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex; /* Align items horizontally */
  align-content: center; /* Vertically center items */

  a {
    /* Inherit color or set explicitly if needed */
    color: #333;
    text-decoration: none;
    display: flex; /* Make link also a flex container */
    align-items: center; /* Align items within the link */
    font-family: 'Georgia', serif; // Keep the font for the text
    font-size: 1.1rem; // Adjust text size if needed

    &:hover {
      opacity: 0.9;
    }

    /* Styles for the text span inside the link */
    span {
      line-height: 1;
      display: inline-block;
    }
  }
`;

// Styled component for the image
const LogoImage = styled.img`
  height: 35px; /* Adjust height as needed */
  margin-right: 10px; /* Space between logo and text */
  border-radius: 6px; /* Rounded corners */
  margin-bottom: 0 !important; /* Override potential global margin */
`;

// Removing NavLinks and ActionButtons components

const Header = () => {
  const { isDarkMode } = useTheme(); // Get theme state

  return (
    <HeaderWrapper>
      {/* Restored Logo wrapper */}
      <Logo>
        {/* Restored correct Link structure */}
        <Link to="/">
          {/* Conditionally render logo based on theme */}
          <LogoImage src={isDarkMode ? logoDarkImage : logoImage} alt="Grocery App Logo" />
          <span>yet another grocery app</span> {/* Keep text in a span */}
        </Link>
      </Logo>
      {/* Navigation links and Start Shopping button removed */}
      <ThemeSwitch /> {/* Add the theme switch component */}
    </HeaderWrapper>
  );
};

export default Header;
