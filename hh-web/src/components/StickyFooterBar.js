import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; // Add import for Link

// Re-using StoreButton styling (consider consolidating styles)
// Hardcode colors for footer
const StoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #000; // Always black background
  color: #fff; // Always white text
  padding: 0.6rem 1.2rem; // Slightly smaller padding
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem; // Slightly smaller font size
  transition: background-color 0.2s ease; // Only transition background

  .icon {
    margin-right: 0.5rem;
    font-size: 1.1rem;
    // Emoji color won't change
  }

  &:hover {
    background-color: #333; // Always dark grey hover
  }
`;

const BarWrapper = styled.div`
  background-color: var(--color-features-bg); // Keep themed background
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); // Keep shadow simple or make variable later
  border-top: 1px solid var(--color-border, #eee); // Keep themed border
  margin-top: auto; // Push to bottom if content is short
  transition: background-color 0.3s ease, border-color 0.3s ease; // Add transitions

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
  color: #333; // Changed to darker grey/black
  font-size: 0.85rem;
  // Removed color transition

  a {
    color: #333; // Changed to darker grey/black
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
  color: #000000; // Changed to darker grey/black
  // Removed color transition

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