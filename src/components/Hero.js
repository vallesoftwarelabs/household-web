import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
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
  padding: 4rem 1rem; // Generous padding for the hero section
  background-color: var(--color-background); // Use theme background variable
  transition: background-color 0.3s ease; // Add transition

  @media (max-width: 768px) {
    flex-direction: column; // Stack columns
    text-align: center; // Center text when stacked
    padding: 0;
    padding-top: 1rem;
    padding-bottom: 3rem;
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
    text-align: left; // Left align text on mobile, consistent with feature sections
  }
`;

// Updated to match FeatureTitle styling from StyledFeatureComponents
const HeroTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #E89031, #C76D52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: color 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }
`;

// Updated to match FeatureDescription styling
const HeroSubHeadline = styled.p`
  font-size: 1.3rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 600;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Updated to match FeatureDescription styling  
const HeroDescription = styled.p`
  font-size: 1.3rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
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
  const { t } = useTranslation();
  const { isDarkMode } = useTheme(); // Get theme state

  return (
    <HeroWrapper>
      <TextContent>
        <HeroTitle>{t('hero.headline')}</HeroTitle>
        <HeroSubHeadline>
          <Trans i18nKey="hero.subHeadline" components={{ em: <em /> }} />
        </HeroSubHeadline>
        <HeroDescription>
          {t('hero.description')}
        </HeroDescription>
        <DownloadBadges />
      </TextContent>
      <ImageContent>
        {isDarkMode ? (
          <StaticImage
            src="../images/iphonemockup-dark.png" // Dark mode image path
            alt={t('hero.phoneAltDark')} // Using translation for alt text
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '8px' }}
          />
        ) : (
          <StaticImage
            src="../images/iphonemockup.png" // Light mode image path
            alt={t('hero.phoneAltLight')} // Using translation for alt text
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