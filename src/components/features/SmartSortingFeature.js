import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { ShoppingCart, MapPin } from 'lucide-react';
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

// Reusing styled components from PurchaseMemoryFeature
const SmartSortingContainer = styled(motion.div)`
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

const ListHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

// Unused for now
// const ListTitle = styled.h3`
//   font-size: 18px;
//   font-weight: 600;
//   color: var(--color-text);
//   margin: 0 0 8px 0;
//   letter-spacing: -0.3px;
// `;

const ListSubtitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: -0.3px;
`;

const StoreAddress = styled.p`
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
  text-align: center;
  opacity: 0.8;
`;

const ListItemsContainer = styled.div`
  position: relative;
  z-index: 1;
  min-height: 470px;
`;

const StyledReorderGroup = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledReorderItem = styled(Reorder.Item)`
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: grab;
`;

const ItemIcon = styled.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  body.dark-mode & {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08));
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
`;

const ItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemName = styled.div`
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`;

// Unused for now
// const ItemChips = styled.div`
//   display: flex;
//   gap: 6px;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// Unused styled components for now
// const Chip = styled.div`
//   background: ${props => props.variant === 'primary' 
//     ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.1))'
//     : 'rgba(0, 0, 0, 0.04)'
//   };
//   border: 1px solid ${props => props.variant === 'primary' 
//     ? 'rgba(34, 197, 94, 0.25)' 
//     : 'rgba(0, 0, 0, 0.08)'
//   };
//   border-radius: 10px;
//   padding: 6px 10px;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   font-size: 12px;
//   font-weight: 500;
//   color: ${props => props.variant === 'primary' ? '#16A34A' : 'var(--color-text-secondary)'};
//   transition: all 0.3s ease-in-out;
//
//   body.dark-mode & {
//     background: ${props => props.variant === 'primary' 
//       ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.15))'
//       : 'rgba(255, 255, 255, 0.06)'
//     };
//     border-color: ${props => props.variant === 'primary' 
//       ? 'rgba(34, 197, 94, 0.3)' 
//       : 'rgba(255, 255, 255, 0.1)'
//     };
//     color: ${props => props.variant === 'primary' ? '#22C55E' : 'var(--color-text-secondary)'};
//   }
// `;

const SmartSortingMockup = ({ startAnimation }) => {
  const { t } = useTranslation();
  const [currentStoreIndex, setCurrentStoreIndex] = useState(0);
  const [groceryItems, setGroceryItems] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [loopKey, setLoopKey] = useState(0);

  const stores = t('features.smartSorting.stores', { returnObjects: true });
  const baseItems = t('features.smartSorting.groceryItems', { returnObjects: true });

  const getItemsForStore = (storeIndex) => {
    const items = [...baseItems];
    switch (storeIndex) {
      case 0: // Walmart 1 - Original order
        return items;
      case 1: // Walmart 2 - Move salami after tomatoes, ground beef after salami
        return [
          items[0], // cucumber
          items[1], // tomatoes
          items[5], // salami
          items[4], // ground beef
          items[2], // milk
          items[3]  // cheese
        ];
      case 2: // Kroger - cucumber/tomatoes switch, milk/cheese switch
        return [
          items[1], // tomatoes
          items[0], // cucumber
          items[3], // cheese
          items[2], // milk
          items[5], // salami
          items[4]  // ground beef
        ];
      case 3: // Costco - ground beef and salami move to bottom
        return [
          items[1], // tomatoes
          items[0], // cucumber
          items[3], // cheese
          items[2], // milk
          items[4], // ground beef
          items[5]  // salami
        ];
      default:
        return items;
    }
  };

  // Animation sequence
  useEffect(() => {
    if (!startAnimation) return;

    const animationSequence = () => {
      // Animation sequence for each store
      let totalDelay = 2500; // Initial delay after first store

      for (let i = 1; i < stores.length; i++) {
        setTimeout(() => {
          // Change store name/address immediately
          setCurrentStoreIndex(i);
          // Wait 600ms then update the item order state
          setTimeout(() => {
            setGroceryItems(getItemsForStore(i));
          }, 600);
        }, totalDelay);
        
        totalDelay += 2500; // 2s wait + 600ms delay + 1.4s for settling
      }

      // Loop the animation
      setTimeout(() => {
        setLoopKey(prevKey => prevKey + 1);
        setCurrentStoreIndex(0);
        // Wait 600ms then reset the item order
        setTimeout(() => {
          setGroceryItems(getItemsForStore(0));
        }, 600);
      }, totalDelay + 1000);
    };

    animationSequence();
  }, [startAnimation, loopKey]);

  // Set initial items
  useEffect(() => {
    setGroceryItems(getItemsForStore(0));
    setShowItems(true);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  const storeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <SmartSortingContainer
      initial="hidden"
      animate="visible"
      variants={{
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
      }}
    >
      <ListHeader>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentStoreIndex}-${loopKey}`}
            variants={storeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ListSubtitle>
              <MapPin size={16} />
              {stores[currentStoreIndex]?.name || 'Walmart'}
            </ListSubtitle>
            <StoreAddress>
              {stores[currentStoreIndex]?.address || '1050 Cedar Ridge Blvd'}
            </StoreAddress>
          </motion.div>
        </AnimatePresence>
      </ListHeader>
      
      <ListItemsContainer>
        {showItems && (
          <StyledReorderGroup
            axis="y"
            values={groceryItems}
            onReorder={setGroceryItems}
          >
            {groceryItems.map((item) => (
              <StyledReorderItem
                key={item.id}
                value={item}
              >
                <ItemIcon>{item.emoji}</ItemIcon>
                <ItemContent>
                  <ItemName>{item.name}</ItemName>
                </ItemContent>
              </StyledReorderItem>
            ))}
          </StyledReorderGroup>
        )}
      </ListItemsContainer>
    </SmartSortingContainer>
  );
};

const SmartSortingFeature = () => {
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
            <ShoppingCart />
          </FeatureIcon>
          <FeatureTitle variants={fadeInUp}>
            {t('features.smartSorting.title')}
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            <Trans i18nKey="features.smartSorting.description" components={{ em: <em />, strong: <strong /> }} />
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="🎯">
              {t('features.smartSorting.feature1')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="⚡">
              {t('features.smartSorting.feature2')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="📍">
              {t('features.smartSorting.feature3')}
            </FeatureListItem>
          </FeatureList>
          <DownloadBadges hideOnMobile={true} text={t('features.smartSorting.downloadBadgesText')} />
        </ContentSide>
        <GraphicSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
          onAnimationComplete={() => setStartComplexAnimation(true)}
        >
          <SmartSortingMockup startAnimation={startComplexAnimation} />
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default SmartSortingFeature; 