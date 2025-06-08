import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook
import DownloadBadges from './DownloadBadges';

// Re-using the Button style from Header (consider moving to a shared file later)
const Button = styled.button`
  background-color: var(--button-primary-bg); // Use CSS variable
  color: var(--button-primary-text); // Use CSS variable
  padding: 0.85rem 1.75rem; // Slightly larger padding for hero button
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out; // Added color transition
  margin-top: 1.5rem; // Space above the button

  &:hover {
    background-color: var(--button-primary-bg-hover); // Use CSS variable for hover
  }
`;



const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 3rem; // Generous padding for the hero section
  background-color: var(--color-background); // Use theme background variable
  transition: background-color 0.3s ease; // Add transition

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
    color: var(--color-text); // Use theme text variable
    transition: color 0.3s ease; // Add transition
    @media (max-width: 768px) {
      font-size: 2.2rem; // Smaller heading
    }
    @media (max-width: 480px) {
      font-size: 1.8rem; // Even smaller heading
    }
  }

  p {
    font-size: 1.1rem;
    color: var(--color-text-secondary, #666); // Use secondary text variable with fallback
    margin-bottom: 1.5rem;
    line-height: 1.6;
    transition: color 0.3s ease; // Add transition
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

// Sub-headline styled component
const SubHeadline = styled.p`
  font-size: 1.4rem; // Larger than regular paragraph, smaller than h1
  font-weight: 600; // Semi-bold
  color: var(--color-text); // Primary text color like h1
  margin-bottom: 1.25rem; // Slightly less margin than h1
  line-height: 1.4;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
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
  const { isDarkMode } = useTheme(); // Get theme state

  return (
    <HeroWrapper>
      <TextContent>
        <h1>Your Grocery List, Intelligently Reimagined.</h1>
        <SubHeadline>
          Shop faster with lists that automatically sort for <em>your</em> path in <em>any</em> store, and gain clear insights into your spending.
        </SubHeadline>
        <p>
          Tired of aisle-hopping? Our app learns your habits at each store, auto-sorts your list, tracks your spending, and lets you share everything with your household.
        </p>
        <DownloadBadges />
      </TextContent>
      <ImageContent>
        {isDarkMode ? (
          <StaticImage
            src="../images/iphonemockup-dark.png" // Dark mode image path
            alt="App screenshot on iPhone mockup (Dark Mode)"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '8px' }}
          />
        ) : (
          <StaticImage
            src="../images/iphonemockup.png" // Light mode image path
            alt="App screenshot on iPhone mockup (Light Mode)"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '8px' }}
          />
        )}
      </ImageContent>
    </HeroWrapper>
  );
};

export default Hero; 