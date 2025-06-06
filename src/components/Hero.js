import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook
import GooglePlayBadge from '../images/googleplay.png'; // Import Google Play badge
import AppStoreBadge from '../images/appstore_black.svg'; // Import App Store badge

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

// New styled component for the badges container
const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; // Space between badges
  margin-top: 1.5rem; // Same top margin as the button had

  @media (max-width: 768px) {
    justify-content: center; // Center badges when stacked
  }
`;

// New styled component for individual badges
const BadgeLink = styled.a`
  display: inline-block; // Allows setting height/width if needed
  img {
    height: 40px; // Standard height for store badges
    width: auto; // Maintain aspect ratio
    display: block; // Remove extra space below img
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
        <h1>Stop wasting time at the grocery store.</h1>
        <p>
          Tired of zigzagging through the store and constantly backtracking? Our app optimizes your shopping experience, and continiously learns your pattern in each individual grocery store.
        </p>
        <BadgesContainer>
          <BadgeLink href="https://apps.apple.com/app/id6737360577" target="_blank" rel="noopener noreferrer">
            <img src={AppStoreBadge} alt="Download on the App Store" />
          </BadgeLink>
          <BadgeLink href="https://play.google.com/store/apps/details?id=com.vallesoftwarelabs.household" target="_blank" rel="noopener noreferrer">
            <img src={GooglePlayBadge} alt="Get it on Google Play" />
          </BadgeLink>
        </BadgesContainer>
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