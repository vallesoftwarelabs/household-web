import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
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
import { useTheme } from '../../context/ThemeContext';

// Styled components for the analytics mockup
const AnalyticsContainer = styled(motion.div)`
  width: 400px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%,
    rgba(248, 250, 252, 0.98) 100%
  );
  border-radius: 24px;
  padding: 32px 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse 60% 40% at 50% 0%,
      rgba(232, 144, 49, 0.06) 0%,
      transparent 70%
    );
    border-radius: 24px;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(232, 144, 49, 0.12);
    border-radius: 24px;
    pointer-events: none;
  }

  body.dark-mode & {
    background: linear-gradient(135deg, 
      rgba(26, 26, 26, 0.95) 0%,
      rgba(20, 20, 20, 0.98) 100%
    );
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 8px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
      
    &::before {
      background: radial-gradient(
        ellipse 60% 40% at 50% 0%,
        rgba(237, 165, 74, 0.08) 0%,
        transparent 70%
      );
    }
    
    &::after {
      border-color: rgba(237, 165, 74, 0.15);
    }
  }
`;

const Header = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.3px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const CategoryItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const CategoryIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
`;

const BarContainer = styled.div`
  flex: 1;
  position: relative;
  height: 36px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;

  body.dark-mode & {
    background: rgba(255, 255, 255, 0.06);
  }
`;

const BarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(232, 144, 49, 0.9) 0%,
    rgba(237, 165, 74, 0.8) 100%
  );
  border-radius: 18px;
  position: absolute;
  left: 0;
  top: 0;

  body.dark-mode & {
    background: linear-gradient(135deg, 
      rgba(237, 165, 74, 0.9) 0%,
      rgba(232, 144, 49, 0.8) 100%
    );
  }
`;

const CategoryLabel = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
`;

const CategoryName = styled.span`
  color: var(--color-text);
`;

const CategoryAmount = styled.span`
  color: var(--color-text);
  font-weight: 600;
  font-size: 12px;
`;

const SummaryText = styled(motion.div)`
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-text-secondary);
  text-align: left;
  padding: 16px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  body.dark-mode & {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.05);
  }
`;

const HighlightText = styled.span`
  color: var(--color-text);
  font-weight: 600;
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
`;

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

// --- Analytics Carousel (replaces legacy animated mock) ---
const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`;

const DotButton = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: ${props => (props.$active ? 'var(--color-accent, #E89031)' : 'rgba(0, 0, 0, 0.25)')};
  border: none;
  cursor: pointer;
  padding: 0;
  body.dark-mode & {
    background: ${props => (props.$active ? 'rgba(237, 165, 74, 1)' : 'rgba(255, 255, 255, 0.35)')};
  }
`;

const ArrowButton = styled.button`
  appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: var(--color-text);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  line-height: 1;
  body.dark-mode & {
    border-color: rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.04);
  }
`;

const SlideFigure = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

const AnalyticsCarousel = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const { isDarkMode } = useTheme();
  const slides = [
    {
      key: 'overview',
      title: t('features.analyticsCarousel.heading.overview', 'Your spending insights'),
      alt: t('features.analyticsCarousel.alt.overview', 'Analytics overview: trips and total spent'),
      Img: () => (
        isDarkMode ? <StaticImage
        src="../../images/stats1-dark-portrait.png"
        alt={t('features.analyticsCarousel.alt.overview', 'Analytics overview: trips and total spent')}
        placeholder="blurred"
        loading="eager"
        style={{ width: '100%', height: 'auto' }}
      /> : <StaticImage
      src="../../images/stats1-light-portrait.png"
      alt={t('features.analyticsCarousel.alt.overview', 'Analytics overview: trips and total spent')}
      placeholder="blurred"
      loading="eager"
      style={{ width: '100%', height: 'auto' }}
    />
      )
    },
    {
      key: 'categories',
      title: t('features.analyticsCarousel.heading.categories', 'Category breakdown'),
      alt: t('features.analyticsCarousel.alt.categories', 'Category breakdown'),
      Img: () => (
        isDarkMode ? <StaticImage
        src="../../images/stats2-dark-portrait.png"
        alt={t('features.analyticsCarousel.alt.categories', 'Category breakdown')}
        placeholder="blurred"
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
      /> : <StaticImage
      src="../../images/stats2-light-portrait.png"
      alt={t('features.analyticsCarousel.alt.categories', 'Category breakdown')}
      placeholder="blurred"
      loading="lazy"
      style={{ width: '100%', height: 'auto' }}
    />
      )
    },
    {
      key: 'categoryDetail',
      title: t('features.analyticsCarousel.heading.categoryDetail', 'Statistics for fresh produce'),
      alt: t('features.analyticsCarousel.alt.categoryDetail', 'Category details with tag highlights'),
      Img: () => (
        isDarkMode ? <StaticImage
        src="../../images/tagstats1-dark-portrait.png"
        alt={t('features.analyticsCarousel.alt.categoryDetail', 'Category details with tag highlights')}
        placeholder="blurred"
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
      /> : <StaticImage
      src="../../images/tagstats1-light-portrait.png"
      alt={t('features.analyticsCarousel.alt.categoryDetail', 'Category details with tag highlights')}
      placeholder="blurred"
      loading="lazy"
      style={{ width: '100%', height: 'auto' }}
    />
      )
    },
    {
      key: 'tagDetail',
      title: t('features.analyticsCarousel.heading.tagDetail', 'Tag details'),
      alt: t('features.analyticsCarousel.alt.tagDetail', 'Spending by tag details'),
      Img: () => (
        isDarkMode ? <StaticImage
        src="../../images/tagstats2-dark-portrait.png"
        alt={t('features.analyticsCarousel.alt.tagDetail', 'Spending by tag details')}
        placeholder="blurred"
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
      /> : <StaticImage
      src="../../images/tagstats2-light-portrait.png"
      alt={t('features.analyticsCarousel.alt.tagDetail', 'Spending by tag details')}
      placeholder="blurred"
      loading="lazy"
      style={{ width: '100%', height: 'auto' }}
    />
      )
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  const goPrev = () => setIndex(prev => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setIndex(prev => (prev + 1) % slides.length);

  return (
    <div style={{ position: 'relative', width: '420px', maxWidth: '100%' }} aria-label={t('features.analyticsCarousel.aria', 'Analytics previews')}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].key}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div>
            <Header>
              <Title>{slides[index].title}</Title>
            </Header>
            <SlideFigure>
              {slides[index].Img()}
            </SlideFigure>
          </div>
        </motion.div>
      </AnimatePresence>

      <CarouselControls>
        <ArrowButton aria-label={t('features.analyticsCarousel.prev', 'Previous')} onClick={goPrev}>‹</ArrowButton>
        {slides.map((s, i) => (
          <DotButton
            key={s.key}
            aria-label={s.alt}
            aria-pressed={index === i}
            $active={index === i}
            onClick={() => setIndex(i)}
          />
        ))}
        <ArrowButton aria-label={t('features.analyticsCarousel.next', 'Next')} onClick={goNext}>›</ArrowButton>
      </CarouselControls>
    </div>
  );
};

const AnalyticsFeature = () => {
  const { t } = useTranslation();

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
            <TrendingUp />
          </FeatureIcon>
          <FeatureTitle variants={fadeInUp}>
            {t('features.analytics.title')}
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            {t('features.analytics.description')}
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="📊">
              {t('features.analytics.feature1')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="📅">
              {t('features.analytics.feature2')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🔍">
              {t('features.analytics.feature3')}
            </FeatureListItem>
          </FeatureList>
          <DownloadText>{t('features.analytics.downloadBadgesText')}</DownloadText>
          <DownloadBadges hideOnMobile={true} />
        </ContentSide>
        <GraphicSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <AnalyticsCarousel />
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default AnalyticsFeature; 