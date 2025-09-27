import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck2, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
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

// Gallery layout (mirrors Recipes overlay behavior)
const Gallery = styled.div`
  position: relative;
  width: 640px;
  max-width: 100%;
  height: 720px;

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

const LeftCard = styled.div`
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

const RightCard = styled.div`
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

const PlannerContainer = styled(motion.div)`
  width: 390px; /* closer to mobile */
  height: 780px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.98));
  box-shadow: 0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6);
  border: 1px solid rgba(232, 144, 49, 0.12);

  body.dark-mode & {
    background: linear-gradient(135deg, rgba(26,26,26,0.95), rgba(20,20,20,0.98));
    border-color: rgba(237,165,74,0.15);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05);
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
`;

const WeekHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 6px 16px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  body.dark-mode & { border-bottom-color: rgba(255,255,255,0.08); }
`;

const WeekTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const WeekMain = styled.div`
  font-weight: 800;
  color: var(--color-text);
`;

const WeekSub = styled.div`
  font-size: 12px;
  color: var(--color-text-secondary);
`;

const NavButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const NavBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: none;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,0.06);
  color: var(--color-text);
  cursor: default;
  body.dark-mode & { background: rgba(255,255,255,0.08); }
`;

const CtaButton = styled(motion.button)`
  appearance: none;
  border: 0;
  background: linear-gradient(135deg, #E89031, #C76D52);
  color: white;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: default;
  box-shadow: 0 6px 18px rgba(232, 144, 49, 0.35);
`;

const PlannerScreen = styled(motion.div)`
  position: absolute;
  inset: 56px 0 0 0;
  padding: 8px 16px 16px 16px;
  overflow: hidden;
`;

const DaysColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DayRow = styled(motion.div)`
  background: transparent;
  padding: 8px 0;
`;

const DayHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px;
`;

const DayHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DayTitle = styled.div`
  color: var(--color-text);
  font-weight: 700;
  font-size: 14px;
`;

const TodayBadge = styled.div`
  padding: 2px 8px;
  border-radius: 12px;
  background: linear-gradient(135deg, #E89031, #C76D52);
  color: white;
  font-size: 11px;
  font-weight: 700;
`;

const AddIconBtn = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, #E89031, #C76D52);
  color: white;
  display: grid;
  place-items: center;
`;

const MealCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  margin: 8px 12px 0 12px;
  border-radius: 12px;
  border-left: 4px solid #E89031;
  background: var(--color-card-bg);
  body.dark-mode & { border-left-color: #EDA54A; }
`;

const MealDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  background: rgba(232,144,49,0.15);
`;

const MealTitle = styled.div`
  color: var(--color-text);
  font-weight: 600;
`;

const MealTypeLabel = styled.div`
  color: var(--color-text-secondary);
  font-size: 12px;
`;

const ListScreen = styled(motion.div)`
  position: absolute;
  inset: 56px 0 0 0;
  padding: 12px 16px;
`;

const ListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px dashed rgba(0,0,0,0.08);
  color: var(--color-text);
  body.dark-mode & {
    border-bottom-color: rgba(255,255,255,0.08);
  }
`;

const AddedBadge = styled(motion.div)`
  position: absolute;
  top: 18px;
  right: 16px;
  background: rgba(44, 197, 125, 0.15);
  color: var(--color-text);
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  border: 1px solid rgba(44, 197, 125, 0.35);
`;

// Replaced animation with image overlay gallery below

const MealPlanningFeature = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <FeatureSection>
      <FeatureContainer>
        <ContentSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <FeatureIcon variants={iconVariants}>
            <CalendarCheck2 />
          </FeatureIcon>
          <FeatureTitle variants={fadeInUp}>
            {t('features.mealPlanning.title', 'Meal Planning')}
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            {t('features.mealPlanning.description', 'Plan your week and add all ingredients in one tap—smartly merging identical or similar items from multiple meals into a single list item.')}
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="🗓️">
              {t('features.mealPlanning.feature1', 'Week view (Mon–Sun) with meals per day')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🔁">
              {t('features.mealPlanning.feature2', 'Swap meals quickly; pull from saved recipes')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🛒">
              {t('features.mealPlanning.feature3', 'One-tap add with smart merging: duplicate or similar items become a single list item')}
            </FeatureListItem>
          </FeatureList>
          <DownloadText>{t('features.mealPlanning.downloadBadgesText', "Plan your week and shop smarter. Download Yet Another Grocery App for effortless meal planning.")}</DownloadText>
          <DownloadBadges hideOnMobile={true} />
        </ContentSide>

        <GraphicSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <Gallery>
            <LeftCard>
              {isDarkMode ? (
                <StaticImage
                  src="../../images/mealplan1-dark-portrait.png"
                  alt={t('features.mealPlanning.weekTitle', 'Week 39')}
                  placeholder="blurred"
                  loading="eager"
                  style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                />
              ) : (
                <StaticImage
                  src="../../images/mealplan1-light-portrait.png"
                  alt={t('features.mealPlanning.weekTitle', 'Week 39')}
                  placeholder="blurred"
                  loading="eager"
                  style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                />
              )}
            </LeftCard>
            <RightCard>
              {isDarkMode ? (
                <StaticImage
                  src="../../images/mealplan2-dark-portrait.png"
                  alt={t('features.mealPlanning.listTitle', 'Shopping list')}
                  placeholder="blurred"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                />
              ) : (
                <StaticImage
                  src="../../images/mealplan2-light-portrait.png"
                  alt={t('features.mealPlanning.listTitle', 'Shopping list')}
                  placeholder="blurred"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                />
              )}
            </RightCard>
          </Gallery>
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default MealPlanningFeature;


