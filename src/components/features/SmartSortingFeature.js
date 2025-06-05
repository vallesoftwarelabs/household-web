import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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

const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 8px 0;
  letter-spacing: -0.3px;
`;

const ListSubtitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: -0.3px;
`;

const ListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 1;
`;

const ListItem = styled(motion.div)`
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
  transition: all 0.3s ease-in-out;
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

const ItemChips = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
`;

const Chip = styled.div`
  background: ${props => props.variant === 'primary' 
    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.1))'
    : 'rgba(0, 0, 0, 0.04)'
  };
  border: 1px solid ${props => props.variant === 'primary' 
    ? 'rgba(34, 197, 94, 0.25)' 
    : 'rgba(0, 0, 0, 0.08)'
  };
  border-radius: 10px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.variant === 'primary' ? '#16A34A' : 'var(--color-text-secondary)'};
  transition: all 0.3s ease-in-out;

  body.dark-mode & {
    background: ${props => props.variant === 'primary' 
      ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.15))'
      : 'rgba(255, 255, 255, 0.06)'
    };
    border-color: ${props => props.variant === 'primary' 
      ? 'rgba(34, 197, 94, 0.3)' 
      : 'rgba(255, 255, 255, 0.1)'
    };
    color: ${props => props.variant === 'primary' ? '#22C55E' : 'var(--color-text-secondary)'};
  }
`;

const SmartSortingMockup = () => {
  const groceryItems = [
    { id: 1, emoji: '🥒', name: 'Cucumber', section: 'Produce' },
    { id: 2, emoji: '🍅', name: 'Tomatoes', section: 'Produce' },
    { id: 3, emoji: '🥛', name: 'Milk', section: 'Dairy' },
    { id: 4, emoji: '🧀', name: 'Cheese', section: 'Dairy' },
    { id: 5, emoji: '🥩', name: 'Ground Beef', section: 'Meat' },
    { id: 6, emoji: '🥓', name: 'Salami', section: 'Deli' }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
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
        <ListSubtitle>
          <MapPin size={16} />
          Whole Foods Market
        </ListSubtitle>
      </ListHeader>
      
      <ListItemsContainer>
        {groceryItems.map((item, index) => (
          <ListItem
            key={item.id}
            custom={index}
            variants={itemVariants}
          >
            <ItemIcon>{item.emoji}</ItemIcon>
            <ItemContent>
              <ItemName>{item.name}</ItemName>
            </ItemContent>
          </ListItem>
        ))}
      </ListItemsContainer>
    </SmartSortingContainer>
  );
};

const SmartSortingFeature = () => {
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
            Smart Store-Based Sorting
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            Never zigzag through the store again. Your grocery list automatically reorganizes itself based on the specific store layout, creating the most efficient shopping path.
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="🎯">
              Optimized routing for each store
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="⚡">
              Saves 30% shopping time
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="📍">
              Learns store layouts automatically
            </FeatureListItem>
          </FeatureList>
        </ContentSide>
        <GraphicSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <SmartSortingMockup />
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default SmartSortingFeature; 