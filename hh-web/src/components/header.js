import React from 'react';
import styled from 'styled-components';

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
  padding: 1rem 3rem; // Adjust padding
  background-color: #fff; // White background
  color: #333; // Dark text color for contrast
  border-bottom: 1px solid #eee; // Subtle bottom border
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem; // Make logo text slightly larger
  color: #6a11cb; // Placeholder purple color like the logo image
  /* We'll replace this with the actual SVG/image later */
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
`;

const ActionButtons = styled.div`
  // Only one button now
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>LOGO</Logo> {/* Placeholder Logo Text */}
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
