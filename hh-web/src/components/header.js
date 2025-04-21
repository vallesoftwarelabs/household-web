import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logoImage from '../images/logo.svg'; // Import the logo image
import ThemeSwitch from './ThemeSwitch'; // Import the ThemeSwitch component

// Removing the Button component since we won't use it

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between; // Changed to space-between
  align-items: center; // Changed to center alignment vertically
  padding: 1rem 3rem;
  background-color: #F4F8F1; // Changed background color
  color: #333;
  border-bottom: 1px solid #eee;

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
  return (
    <HeaderWrapper>
      {/* Restored Logo wrapper */}
      <Logo>
        {/* Restored correct Link structure */}
        <Link to="/">
          <LogoImage src={logoImage} alt="Grocery App Logo" />
          <span>yet another grocery app</span> {/* Keep text in a span */}
        </Link>
      </Logo>
      {/* Navigation links and Start Shopping button removed */}
      <ThemeSwitch /> {/* Add the theme switch component */}
    </HeaderWrapper>
  );
};

export default Header;
