import React from 'react';
import styled from 'styled-components';

const DownloadWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3rem;
  background-color: #f9f9f9; // Light grey background

  @media (max-width: 768px) {
    flex-direction: column-reverse; // Stack (image above text)
    text-align: center;
    padding: 3rem 1.5rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 45%;
  padding-right: 3rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
    margin-top: 2rem; // Add space above text when stacked
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: #222;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
     @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center; // Center buttons when stacked
  }
`;

// Basic structure for Store Buttons (styling needed)
const StoreButton = styled.a`
  display: inline-flex; // Align icon and text
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s ease;

  .icon {
    // Placeholder for store icon (e.g., FontAwesome, SVG)
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #333;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  max-width: 40%; // Adjust as needed
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 60%; // Adjust image size
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 70%;
  }

  // Placeholder for the phone image
  div {
    width: 100%;
    max-width: 300px; // Limit phone image size
    height: 500px; // Adjust height
    background-color: #fdd8a5; // Placeholder background similar to image
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    font-size: 1.5rem;
  }
`;

const DownloadApp = () => {
  return (
    <DownloadWrapper>
      <TextContent>
        <h2>Shop Smarter, Live Easier</h2>
        <p>
          Get our app for exclusive offers, real-time delivery tracking, and the
          easiest way to manage your weekly grocery shopping. Spend less time
          shopping, more time living!
        </p>
        <ButtonsContainer>
          {/* Replace # with actual store links */}
          <StoreButton href="#">
            <span className="icon"></span> App Store
          </StoreButton>
          <StoreButton href="#">
            <span className="icon">▶</span> Play Store
          </StoreButton>
        </ButtonsContainer>
      </TextContent>
      <ImageContent>
        {/* Placeholder for phone image */}
        <div>Phone Mockup</div>
      </ImageContent>
    </DownloadWrapper>
  );
};

export default DownloadApp; 