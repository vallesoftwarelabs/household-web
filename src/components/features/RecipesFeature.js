import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import { Utensils } from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useTheme } from '../../context/ThemeContext';

import {
  FeatureSection,
  FeatureContainer,
  ContentSide,
  GraphicSide,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  FeatureList,
  FeatureListItem,
  containerVariants,
  slideInRight,
  fadeInUp,
  iconVariants
} from './StyledFeatureComponents';
import DownloadBadges from '../DownloadBadges';

const DownloadText = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  line-height: 1.5;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: left;
  }
`;

const Gallery = styled.div`
  position: relative;
  width: 640px;
  max-width: 100%;
  height: 720px; /* provides space for overlapped layout */

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 560px;
    height: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const LeftCard = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: 0;
  width: 360px;
  border-radius: 16px;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
  }
`;

const RightCard = styled(motion.div)`
  position: absolute;
  top: 80px;
  left: 300px;
  width: 360px;
  border-radius: 16px;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
  }
`;

const RecipesFeature = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const { isDarkMode } = useTheme();

  return (
    <FeatureSection>
      <FeatureContainer className="reverse">
        <ContentSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <FeatureIcon variants={iconVariants}>
            <Utensils />
          </FeatureIcon>
          <FeatureTitle variants={fadeInUp}>
            {t('features.recipes.title', 'AI-powered recipes')}
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            {t('features.recipes.description', 'Ask for exactly what you want and watch results stream in. Explore quick meals and cuisines, save favorites, and add ingredients to your list in one tap.')}
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="🤖">
              {t('features.recipes.feature1', 'AI recipe search with streaming results')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="⚡">
              {t('features.recipes.feature2', 'Quick meals, cuisines and ingredient collections')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🛒">
              {t('features.recipes.feature3', 'One-tap add to grocery list; save to your household')}
            </FeatureListItem>
          </FeatureList>
          <DownloadText>{t('features.recipes.downloadBadgesText', 'Find exactly what you want to cook. Download Yet Another Grocery App for AI-powered recipes.')}</DownloadText>
          <DownloadBadges hideOnMobile={true} />
        </ContentSide>

        <GraphicSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <Gallery>
            <LeftCard
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {isDarkMode ? <StaticImage
                src="../../images/recipes1-dark-portrait.png"
                alt={t('features.recipes.images.savedAlt', 'Saved recipes and quick meals')}
                placeholder="blurred"
                loading="eager"
                style={{ width: '100%', height: 'auto', borderRadius: 16 }}
              /> : <StaticImage
              src="../../images/recipes1-light-portrait.png"
              alt={t('features.recipes.images.savedAlt', 'Saved recipes and quick meals')}
              placeholder="blurred"
              loading="eager"
              style={{ width: '100%', height: 'auto', borderRadius: 16 }}
            />}
            </LeftCard>
            <RightCard
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              {isDarkMode ? <StaticImage
                src="../../images/recipes2-dark-portrait.png"
                alt={t('features.recipes.images.exploreAlt', 'Explore cuisines and collections')}
                placeholder="blurred"
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: 16 }}
              /> : <StaticImage
                src="../../images/recipes2-light-portrait.png"
                alt={t('features.recipes.images.exploreAlt', 'Explore cuisines and collections')}
                placeholder="blurred"
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: 16 }}
              />}
            </RightCard>
          </Gallery>
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default RecipesFeature;


