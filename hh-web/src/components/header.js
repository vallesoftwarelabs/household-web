import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Basic Button Style (can be moved to a common components file later)
const Button = styled.button`
  background-color: #000; // Black background
  color: #fff; // White text
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333; // Darker shade on hover
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #fff; // White background
  color: #333; // Dark text color for contrast
  border-bottom: 1px solid #eee; // Subtle bottom border

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem; // Reduce padding on smaller screens
    flex-wrap: wrap; // Allow wrapping if needed
    justify-content: space-between; // Keep space-between for logo/button
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem; // Make logo text slightly larger
  color: #6a11cb; // Placeholder purple color like the logo image
  /* We'll replace this with the actual SVG/image later */

  /* Style the link within the logo */
  a {
    color: inherit; /* Inherit the purple color */
    text-decoration: none; /* Remove underline */
  }

  @media (max-width: 768px) {
    font-size: 1.3rem; // Slightly smaller logo text
    margin-bottom: 0.5rem; // Add margin if wrapping occurs
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem; // Adjust space between links

  a {
    color: #555; // Standard link color
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem; // Reduce gap
    font-size: 0.9rem; // Smaller nav links
    order: 3; // Move nav below logo/button if wrapped
    width: 100%; // Take full width when wrapped
    justify-content: center; // Center links when wrapped
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem; // Even smaller gap
  }
`;

const ActionButtons = styled.div`
  // Only one button now
  @media (max-width: 768px) {
    // Button itself will inherit size, just ensure alignment
    margin-bottom: 0.5rem; // Add margin if wrapping occurs
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        {/* Wrap logo text in Link and use correct text */}
        <Link to="/">Household</Link>
      </Logo>
      <NavLinks>
        <a href="#">How It Works</a>
        <a href="#">Categories</a>
        <a href="#">Offers</a>
      </NavLinks>
      <ActionButtons>
        <Button>Start Shopping</Button>
      </ActionButtons>
    </HeaderWrapper>
  );
};

export default Header;
