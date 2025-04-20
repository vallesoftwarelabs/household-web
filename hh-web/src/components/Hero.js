import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

// Re-using the Button style from Header (consider moving to a shared file later)
const Button = styled.button`
  background-color: #000; // Black background
  color: #fff; // White text
  padding: 0.85rem 1.75rem; // Slightly larger padding for hero button
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;
  margin-top: 1.5rem; // Space above the button

  &:hover {
    background-color: #333; // Darker shade on hover
  }
`;

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 3rem; // Generous padding for the hero section
  background-color: #fff; // White background

  @media (max-width: 768px) {
    flex-direction: column; // Stack columns
    text-align: center; // Center text when stacked
    padding: 3rem 1.5rem; // Adjust padding
  }
`;

const TextContent = styled.div`
  flex: 1; // Take up available space
  max-width: 50%; // Limit width
  padding-right: 3rem; // Space between text and image

  @media (max-width: 768px) {
    max-width: 100%; // Full width when stacked
    padding-right: 0;
    margin-bottom: 2rem; // Space between text and image when stacked
  }

  h1 {
    font-size: 3rem; // Large heading
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: #222;
    @media (max-width: 768px) {
      font-size: 2.2rem; // Smaller heading
    }
    @media (max-width: 480px) {
      font-size: 1.8rem; // Even smaller heading
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ImageContent = styled.div`
  flex: 1;
  max-width: 45%; // Adjust width as needed
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 80%; // Adjust image width when stacked
    margin: 0 auto; // Center image container
  }

  @media (max-width: 480px) {
    max-width: 95%; // Larger image on very small screens
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <TextContent>
        <h1>Stop wasting time at the grocery store.</h1>
        <p>
          Tired of zigzagging through the store and constantly backtracking? Our app optimizes your shopping experience, and continiously learns your pattern in each individual grocery store.
        </p>
        <Button>Try now!</Button>
      </TextContent>
      <ImageContent>
        <StaticImage
          src="../images/iphonemockup.png"
          alt="App screenshot on iPhone mockup"
          placeholder="blurred"
          layout="constrained"
          style={{ borderRadius: '8px' }}
        />
      </ImageContent>
    </HeroWrapper>
  );
};

export default Hero; 