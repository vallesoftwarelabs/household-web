import React from 'react';
import styled from 'styled-components';

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
`;

const TextContent = styled.div`
  flex: 1; // Take up available space
  max-width: 50%; // Limit width
  padding-right: 3rem; // Space between text and image

  h1 {
    font-size: 3rem; // Large heading
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: #222;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  max-width: 45%; // Adjust width as needed
  display: flex;
  justify-content: center;
  align-items: center;

  // Placeholder for the image
  div {
    width: 100%;
    height: 350px; // Adjust height as needed
    background-color: #f0e6d2; // Placeholder background color similar to image
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <TextContent>
        <h1>Stop Wasting Time at the Grocery Store. Get Fresh Food Delivered.</h1>
        <p>
          Tired of crowded aisles and long checkout lines? Reclaim your weekends
          and enjoy delicious, high-quality groceries brought right to your door.
        </p>
        <Button>Start Shopping Now</Button>
      </TextContent>
      <ImageContent>
        {/* Placeholder for image */}
        <div>Image Placeholder</div>
      </ImageContent>
    </HeroWrapper>
  );
};

export default Hero; 