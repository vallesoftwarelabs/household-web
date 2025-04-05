import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; // Add import for Link

// Re-using StoreButton styling (consider consolidating styles)
const StoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 0.6rem 1.2rem; // Slightly smaller padding
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem; // Slightly smaller font size
  transition: background-color 0.2s ease;

  .icon {
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #333;
  }
`;

const BarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95); // Slightly transparent white
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between; // Changed to space-between for footer layout
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); // Shadow on top edge
  z-index: 1000; // Ensure it's above other content

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
  color: #666;
  font-size: 0.85rem;

  a {
    color: #666;
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

// Right section with app store buttons
const AppButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    order: 1; // Move to top on mobile
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const InfoText = styled.span`
  margin-right: 1.5rem;
  color: #555;

  @media (max-width: 480px) {
    display: none; // Hide text on very small screens
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
      </FooterInfo>
      
      <AppButtons>
        <InfoText>Get the app:</InfoText>
        {/* Replace # with actual store links */}
        <StoreButton href="#">
          <span className="icon">🍎</span> App Store
        </StoreButton>
        <StoreButton href="#">
          <span className="icon">▶</span> Play Store
        </StoreButton>
      </AppButtons>
    </BarWrapper>
  );
};

export default StickyFooterBar; 