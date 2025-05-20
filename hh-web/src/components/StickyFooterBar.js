import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; // Add import for Link

// Re-using StoreButton styling (consider consolidating styles)
// Hardcode colors for footer - REMOVED
const StoreButton = styled.a`
  // Base styles from CategoryCard
  // background-color: var(--color-card-bg); // Replaced by gradient background
  border-radius: 2rem; // Rounded pill shape
  box-shadow: var(--card-shadow); // Use card shadow variable
  text-align: center;
  // border: 1px solid var(--color-border, rgba(0, 0, 0, 0.05)); // Replaced by gradient border
  position: relative; // Needed for pseudo-element positioning
  overflow: hidden; // Ensure gradient clipping with large radius
  transition: all 0.2s ease, box-shadow 0.3s ease; // Adjusted transitions
  padding: calc(0.7rem + 2px) calc(1.2rem + 2px); // Add 2px to padding for border space
  background: linear-gradient(to right, #FCA46D, #C76D52); // Gradient applied directly
  
  // Pseudo-element for inner background (both modes)
  &::before {
      content: '';
      position: absolute;
      inset: 2px;
      background: var(--color-card-bg); // Use theme variable for inner bg
      border-radius: calc(2rem - 2px); /* Original radius - inset */
      z-index: -1; // Sit behind the gradient background acting as border
      transition: background-color 0.3s ease; // Transition inner background
  }

  // Layout styles from CategoryCardContentWrapper applied directly
  display: inline-flex; // Make contents inline
  align-items: center; // Vertically center icon and text
  // padding: 0.7rem 1.2rem; // Padding is now handled by the border space logic
  z-index: 2; // Ensure content is above potential pseudo-element
  
  // Text & Link styles
  color: var(--color-text); // Use theme text (overrides footer's white text)
  text-decoration: none;
  font-size: 0.95rem; // Smaller text from CategoryCard h3
  font-weight: 600; // Slightly lighter weight from CategoryCard h3

  // Dark mode gradient border from CategoryCard - REMOVED (applied directly now)
  /*
  body.dark-mode & {
    border: none; // Remove default border in dark mode
    padding: calc(0.7rem + 2px) calc(1.2rem + 2px); // Add 2px to padding for border space
    background: linear-gradient(to right, #FCA46D, #C76D52);
    color: var(--color-text); // Ensure text color uses theme variable in dark mode
    &::before {
        content: '';
        position: absolute;
        inset: 2px;
        background: var(--color-card-bg);
        border-radius: calc(2rem - 2px);
        z-index: -1;
    }
  }
  */

  // Icon styles from CategoryCard
  .icon {
    font-size: 1.2rem; // Smaller icon from CategoryCard
    margin-right: 0.6rem; // Space between icon and text from CategoryCard
    // Emoji color won't change
  }

  // Hover styles from CategoryCard
  &:hover {
    transform: translateY(-2px); // Slight lift on hover
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    // Remove default link hover styles if needed
    text-decoration: none;
    color: var(--color-text); // Ensure hover text color matches theme
  }
`;

const BarWrapper = styled.div`
  background-color: #FFFFFF; // Default light mode background
  color: #000000; // Default light mode text color
  padding: 1.5rem 2rem; // Increased vertical padding
  display: flex;
  justify-content: center; // Keep centered from potential previous state or adjust if needed
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); // Keep shadow simple or make variable later
  border-top: 1px solid var(--color-border, #eee); // Keep themed border
  margin-top: auto; // Push to bottom if content is short
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease; // Adjust transitions

  body.dark-mode & {
    background-color: #000000; // Dark mode background
    color: #FFFFFF; // Dark mode text color
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
  }
`;

// Left section with copyright and privacy policy
const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  // Color is inherited from BarWrapper
  font-size: 0.85rem;
  transition: color 0.3s ease; // Add transition for color inheritance

  a {
    color: inherit; // Inherit color from parent
    text-decoration: none;
    margin-left: 0.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    order: 2; // Move to bottom on mobile
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

const StickyFooterBar = () => {
  return (
    <BarWrapper>
      <FooterInfo>
        © {new Date().getFullYear()} Valle Software Labs AS
        {` · `}
        <Link to="/privacy-policy">
          Privacy policy
        </Link>
        {` · `}
        <Link to="/terms-and-conditions">
          Terms & Conditions
        </Link>
        {` · `}
        <Link to="/contact/">
          Contact Us
        </Link>
      </FooterInfo>
      
    </BarWrapper>
  );
};

export default StickyFooterBar; 