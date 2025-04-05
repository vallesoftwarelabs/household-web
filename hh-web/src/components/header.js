import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Removing the Button component since we won't use it

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start; // Changed to left alignment
  align-items: center;
  padding: 1rem 3rem;
  background-color: #fff;
  color: #333;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.6rem; // Slightly larger
  color: #6a11cb;
  font-family: 'Poppins', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; // Nicer font stack
  letter-spacing: -0.02em; // Tighter letter spacing for modern look
  
  /* Style the link within the logo */
  a {
    color: inherit;
    text-decoration: none;
    display: inline-block; // Better for padding/margin
    padding: 0.2rem 0; // Slight padding for better touch target
    position: relative; // For potential hover effects
    
    &:hover {
      opacity: 0.9; // Subtle hover effect
    }
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

// Removing NavLinks and ActionButtons components

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">Household</Link>
      </Logo>
      {/* Navigation links and Start Shopping button removed */}
    </HeaderWrapper>
  );
};

export default Header;
