import React from 'react';
import styled from 'styled-components';

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
  justify-content: center; // Center buttons
  align-items: center;
  gap: 1.5rem; // Space between buttons
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); // Shadow on top edge
  z-index: 1000; // Ensure it's above other content
`;

const StickyFooterBar = () => {
  return (
    <BarWrapper>
      {/* Placeholder message - can be removed or customized */}
      <span style={{ marginRight: '1.5rem', color: '#555' }}>Get the App:</span>
      {/* Replace # with actual store links */}
      <StoreButton href="#">
        <span className="icon"></span> App Store
      </StoreButton>
      <StoreButton href="#">
        <span className="icon">▶</span> Play Store
      </StoreButton>
    </BarWrapper>
  );
};

export default StickyFooterBar; 