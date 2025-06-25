import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
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
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  line-height: 1.5;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const ItemDetailsMockup = ({ startAnimation }) => {
  const { t } = useTranslation();
  const itemData = t('features.analytics.itemDetails', { returnObjects: true });
  const months = itemData?.months || [];
  const [animatedBars, setAnimatedBars] = useState(new Set());

  useEffect(() => {
    if (!startAnimation) return;

    // Animate bars appearing one by one
    months.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedBars(prev => new Set([...prev, index]));
      }, index * 80 + 1000);
    });
  }, [startAnimation]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <AnalyticsContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header>
        <Title>{itemData?.title || 'Item Details'}</Title>
      </Header>

      <motion.div
        variants={itemVariants}
        style={{ marginBottom: '24px' }}
      >
        <SectionTitle style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>
          {itemData?.spendingHistory || 'Spending History'}
        </SectionTitle>
        
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <div style={{ 
            flex: 1, 
            background: 'var(--color-card-bg)', 
            borderRadius: '16px', 
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              {itemData?.spentPastYear || 'Spent past year'}
            </div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text)' }}>
              {itemData?.totalYearAmount || '$3,338.20'}
            </div>
          </div>
          <div style={{ 
            flex: 1, 
            background: 'var(--color-card-bg)', 
            borderRadius: '16px', 
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              {itemData?.spentPast30Days || 'Spent past 30 days'}
            </div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text)' }}>
              {itemData?.total30DayAmount || '$308.70'}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-text)', margin: '0 0 16px 0' }}>
            {itemData?.last12Months || 'Last 12 months'}
          </h4>
        </div>
      </motion.div>

      <CategoriesContainer>
        {months.map((month, index) => (
          <CategoryItem
            key={month?.id || index}
            variants={itemVariants}
          >
            <div style={{ width: '36px', fontSize: '14px', fontWeight: '500', color: 'var(--color-text-secondary)' }}>
              {month?.name || 'Month'}
            </div>
            <BarContainer>
              <BarFill
                style={{ width: `${month?.percentage || 0}%` }}
                initial={{ width: 0 }}
                animate={{ 
                  width: animatedBars.has(index) ? `${month?.percentage || 0}%` : 0 
                }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              />
              <CategoryLabel>
                <CategoryAmount style={{ fontSize: '14px', left: '12px' }}>
                  {month?.amount || '$0'}
                </CategoryAmount>
              </CategoryLabel>
            </BarContainer>
          </CategoryItem>
        ))}
      </CategoriesContainer>
    </AnalyticsContainer>
  );
};

const DrillDownMockup = ({ startAnimation }) => {
  const { t } = useTranslation();
  const drilldownData = t('features.analytics.drilldown', { returnObjects: true });
  const categories = drilldownData?.categories || [];
  const [animatedBars, setAnimatedBars] = useState(new Set());

  useEffect(() => {
    if (!startAnimation) return;

    // Animate bars appearing one by one
    categories.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedBars(prev => new Set([...prev, index]));
      }, index * 100 + 1000);
    });
  }, [startAnimation]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <AnalyticsContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header>
        <Title>{drilldownData?.title || 'Drilldown Statistics'}</Title>
      </Header>

      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryItem
            key={category?.id || index}
            variants={itemVariants}
          >
            <CategoryIcon>{category?.emoji || '📊'}</CategoryIcon>
            <BarContainer>
              <BarFill
                style={{ width: `${category?.percentage || 0}%` }}
                initial={{ width: 0 }}
                animate={{ 
                  width: animatedBars.has(index) ? `${category?.percentage || 0}%` : 0 
                }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              />
              <CategoryLabel>
                <CategoryName>{category?.name || 'Unknown'}</CategoryName>
                <CategoryAmount>({category?.amount || '$0'})</CategoryAmount>
              </CategoryLabel>
            </BarContainer>
          </CategoryItem>
        ))}
      </CategoriesContainer>

      <SummaryText
        variants={itemVariants}
      >
        <Trans 
          i18nKey="features.analytics.drilldown.summary" 
          components={{ highlight: <HighlightText /> }} 
        />
      </SummaryText>
    </AnalyticsContainer>
  );
};

const AnalyticsMockup = ({ startAnimation }) => {
  const { t } = useTranslation();
  const overviewData = t('features.analytics.overview', { returnObjects: true });
  const categories = overviewData?.categories || [];
  const [animatedBars, setAnimatedBars] = useState(new Set());

  useEffect(() => {
    if (!startAnimation) return;

    // Animate bars appearing one by one
    categories.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedBars(prev => new Set([...prev, index]));
      }, index * 100 + 1000);
    });
  }, [startAnimation]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <AnalyticsContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header>
        <Title>{overviewData?.title || 'Category Statistics'}</Title>
      </Header>

      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryItem
            key={category?.id || index}
            variants={itemVariants}
          >
            <CategoryIcon>{category?.emoji || '📊'}</CategoryIcon>
            <BarContainer>
              <BarFill
                style={{ width: `${category?.percentage || 0}%` }}
                initial={{ width: 0 }}
                animate={{ 
                  width: animatedBars.has(index) ? `${category?.percentage || 0}%` : 0 
                }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              />
              <CategoryLabel>
                <CategoryName>{category?.name || 'Unknown'}</CategoryName>
                <CategoryAmount>({category?.amount || '$0'})</CategoryAmount>
              </CategoryLabel>
            </BarContainer>
          </CategoryItem>
        ))}
      </CategoriesContainer>

      <SummaryText
        variants={itemVariants}
      >
        <Trans 
          i18nKey="features.analytics.overview.summary" 
          components={{ highlight: <HighlightText /> }} 
        />
      </SummaryText>
    </AnalyticsContainer>
  );
};

const AnalyticsWithTransition = ({ startAnimation }) => {
  const [currentView, setCurrentView] = useState('overview'); // 'overview', 'drilldown', or 'itemdetails'
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const runAnimationCycle = () => {
      // First, show overview and let it animate
      // After bars finish animating (9 categories * 100ms + 1000ms initial delay = 1900ms)
      // Wait 5 seconds, then switch to drilldown
      setTimeout(() => {
        setCurrentView('drilldown');
        setAnimationKey(prev => prev + 1);
      }, 1900 + 5000);

      // After drilldown animates (6 categories * 100ms + 1000ms = 1600ms)
      // Wait 5 seconds, then switch to item details
      setTimeout(() => {
        setCurrentView('itemdetails');
        setAnimationKey(prev => prev + 1);
      }, 1900 + 5000 + 1600 + 5000);

      // After item details animates (12 months * 80ms + 1000ms = 1960ms)
      // Wait 6 seconds, then switch back to overview and repeat
      setTimeout(() => {
        setCurrentView('overview');
        setAnimationKey(prev => prev + 1);
        // Recursively call to create the loop
        runAnimationCycle();
      }, 1900 + 5000 + 1600 + 5000 + 1960 + 6000);
    };

    runAnimationCycle();
  }, [startAnimation]); // Only depend on startAnimation

  return (
    <div style={{ position: 'relative', width: '400px', height: '600px' }}>
      <AnimatePresence mode="wait">
        {currentView === 'overview' && (
          <motion.div
            key={`overview-${animationKey}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AnalyticsMockup startAnimation={true} />
          </motion.div>
        )}
        {currentView === 'drilldown' && (
          <motion.div
            key={`drilldown-${animationKey}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <DrillDownMockup startAnimation={true} />
          </motion.div>
        )}
        {currentView === 'itemdetails' && (
          <motion.div
            key={`itemdetails-${animationKey}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ItemDetailsMockup startAnimation={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AnalyticsFeature = () => {
  const { t } = useTranslation();
  const [startComplexAnimation, setStartComplexAnimation] = useState(false);

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
          onAnimationComplete={() => setStartComplexAnimation(true)}
        >
          <AnalyticsWithTransition startAnimation={startComplexAnimation} />
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default AnalyticsFeature; 