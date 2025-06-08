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
  // padding: 1rem 3rem; // Padding moved to inner content wrapper
  background-color: var(--color-header-bg); /* Use CSS variable */
  color: var(--color-text); /* Use CSS variable for text too */
  border-bottom: 1px solid var(--color-border, #eee); /* Use variable with fallback */
  position: relative; // For pseudo-elements
  overflow: hidden; // Contain pseudo-elements
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; /* Adjust transitions */

  // Light mode gradient pseudo-element
  &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(ellipse 60% 80% at 100% 0%, #E89031 0%, rgba(232, 144, 49, 0) 70%);
      z-index: 0;
      transition: opacity 0.3s ease;
      opacity: 0; /* Hide in light mode */
  }

  // Dark mode gradient pseudo-element
  &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(ellipse 60% 80% at top right, #EDA54A 0%, #333333 75%);
      filter: blur(20px);
      z-index: -1;
      transform: scale(1.1);
      opacity: 0;
      transition: opacity 0.3s ease;
  }

  body.dark-mode & {
    background-color: transparent; /* Override light mode bg */
    &::before { opacity: 0; } /* Ensure it stays hidden in dark mode too if needed */
    &::after { opacity: 0.4; z-index: 0; }
  }

  @media (max-width: 768px) {
    // padding: 0.75rem 1.5rem; // Padding moved to inner content wrapper
  }
`;

// Create inner wrapper for content
const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem; // Apply original padding
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex; /* Align items horizontally */
  align-content: center; /* Vertically center items */

  a {
    /* Inherit color or set explicitly if needed */
    color: var(--color-text); // Use theme variable
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
      font-family: 'Sniglet', cursive; /* Apply Sniglet font */
      line-height: 1;
      display: inline-block;
      transition: color 0.3s ease; // Add transition
    }
  }

  /* Apply white color to the span in dark mode */
  body.dark-mode & a span {
    color: #FFFFFF;
  }
`;

// Styled component for the image
const LogoImage = styled.img`
  height: 35px; /* Adjust height as needed */
  margin-right: 10px; /* Space between logo and text */
  border-radius: 6px; /* Rounded corners */
  margin-bottom: 0 !important; /* Override potential global margin */
`;

// Removing NavLinks styled component as it's no longer used here

// Removing NavLinks and ActionButtons components

const Header = () => {
  const { isDarkMode } = useTheme(); // Get theme state

  return (
    <HeaderWrapper>
      <HeaderInner> {/* Add inner wrapper */} 
        <Logo>
          <Link to="/">
            <LogoImage src={isDarkMode ? logoDarkImage : logoImage} alt="Grocery App Logo" />
            <span>yet another grocery app</span>
          </Link>
        </Logo>
        {/* Removed NavLinks from here */}
        <ThemeSwitch />
      </HeaderInner> {/* Close inner wrapper */} 
    </HeaderWrapper>
  );
};

export default Header;
