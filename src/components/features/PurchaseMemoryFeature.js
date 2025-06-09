import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Info, ChevronRight } from 'lucide-react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
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
  slideInLeft,
  fadeInUp,
  iconVariants
} from './StyledFeatureComponents';
import DownloadBadges from '../DownloadBadges';

// Styled-components specific to this feature
const PurchaseMemoryContainer = styled(motion.div)`
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

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px 20px;
    border-radius: 20px;
    
    &::before {
      border-radius: 20px;
    }
    
    &::after {
      border-radius: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
    border-radius: 16px;
    
    &::before {
      border-radius: 16px;
    }
    
    &::after {
      border-radius: 16px;
    }
  }
`;

const dimmedStyle = css`
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
`;

const ListHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;
  transition: opacity 0.3s ease-in-out;
  ${({ isDimmed }) => isDimmed && dimmedStyle}
`;

const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 8px 0;
  letter-spacing: -0.3px;
`;

const ListSubtitle = styled.p`
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
  opacity: 0.8;
`;

const AnnotationText = styled(motion.div)`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.5;
  margin-bottom: 16px;
  min-height: 40px; 
  padding: 0 10px;

  body.dark-mode & {
    color: #e0e0e0;
  }
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

  ${({ isDimmed }) => isDimmed && dimmedStyle}
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
  transition: opacity 0.3s ease-in-out;

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
  transition: opacity 0.3s ease-in-out;
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
    ? 'linear-gradient(135deg, rgba(232, 144, 49, 0.15), rgba(232, 144, 49, 0.1))'
    : 'rgba(0, 0, 0, 0.04)'
  };
  border: 1px solid ${props => props.variant === 'primary' 
    ? 'rgba(232, 144, 49, 0.25)' 
    : 'rgba(0, 0, 0, 0.08)'
  };
  border-radius: 10px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.variant === 'primary' ? '#D97706' : 'var(--color-text-secondary)'};
  transition: all 0.3s ease-in-out;
  position: relative;

  ${({ isGlowing }) => isGlowing && css`
    box-shadow: 0 0 12px 4px rgba(232, 144, 49, 0.4), 0 0 20px 8px rgba(232, 144, 49, 0.2);
    border-color: rgba(232, 144, 49, 0.5);
    transform: scale(1.05);
    z-index: 2;
  `}

  ${({ isDimmed }) => isDimmed && dimmedStyle}

  body.dark-mode & {
    background: ${props => props.variant === 'primary' 
      ? 'linear-gradient(135deg, rgba(237, 165, 74, 0.2), rgba(237, 165, 74, 0.15))'
      : 'rgba(255, 255, 255, 0.06)'
    };
    border-color: ${props => props.variant === 'primary' 
      ? 'rgba(237, 165, 74, 0.3)' 
      : 'rgba(255, 255, 255, 0.1)'
    };
    color: ${props => props.variant === 'primary' ? '#EDA54A' : 'var(--color-text-secondary)'};
    
    ${({ isGlowing }) => isGlowing && css`
      box-shadow: 0 0 12px 4px rgba(237, 165, 74, 0.5), 0 0 20px 8px rgba(237, 165, 74, 0.3);
      border-color: rgba(237, 165, 74, 0.6);
    `}
  }
`;

const InfoButton = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, rgba(232, 144, 49, 0.1), rgba(232, 144, 49, 0.05));
  border: 1px solid rgba(232, 144, 49, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D97706;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${({ isDimmed }) => isDimmed && dimmedStyle}
  
  ${({ isPressed }) => isPressed && css`
    background: linear-gradient(135deg, rgba(232, 144, 49, 0.3), rgba(232, 144, 49, 0.2));
    transform: scale(0.95);
    box-shadow: 0 0 12px 4px rgba(232, 144, 49, 0.4);
    border-color: rgba(232, 144, 49, 0.5);
  `}

  body.dark-mode & {
    background: linear-gradient(135deg, rgba(237, 165, 74, 0.15), rgba(237, 165, 74, 0.1));
    border-color: rgba(237, 165, 74, 0.25);
    color: #EDA54A;
    
    ${({ isPressed }) => isPressed && css`
      background: linear-gradient(135deg, rgba(237, 165, 74, 0.3), rgba(237, 165, 74, 0.2));
      box-shadow: 0 0 12px 4px rgba(237, 165, 74, 0.5);
      border-color: rgba(237, 165, 74, 0.6);
    `}
  }
`;

// Modal Components
const ModalContainer = styled(motion.div)`
  width: 400px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 250, 252, 0.95) 100%
  );
  border-radius: 24px;
  padding: 32px 24px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(232, 144, 49, 0.12);

  body.dark-mode & {
    background: linear-gradient(135deg, 
      rgba(26, 26, 26, 0.98) 0%,
      rgba(20, 20, 20, 0.95) 100%
    );
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 8px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    border-color: rgba(237, 165, 74, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    padding: 24px 20px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
    padding: 20px 16px;
    border-radius: 16px;
  }
`;

const ModalHeader = styled(motion.div)`
  margin-bottom: 24px;
  transition: opacity 0.3s ease-in-out;
  
  ${({ isDimmed }) => isDimmed && css`
    opacity: 0.2;
  `}
`;

const ItemTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 16px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const CategoryChips = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const CategoryChip = styled.div`
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text-secondary);

  body.dark-mode & {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

const LastPurchasedSection = styled(motion.div)`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
  transition: opacity 0.3s ease-in-out;
  
  ${({ isDimmed }) => isDimmed && css`
    opacity: 0.12;
  `}
`;

const PurchaseCard = styled.div`
  flex: 1;
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.05);

  body.dark-mode & {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

const PurchaseLabel = styled.div`
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
`;

const PurchaseTime = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const PurchaseHistorySection = styled(motion.div)`
  margin-bottom: 24px;
`;

const ModalAnnotationText = styled(motion.div)`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.5;
  margin-bottom: 24px;
  margin-top: -32px;
  min-height: 40px;
  padding: 0 10px;

  body.dark-mode & {
    color: #e0e0e0;
  }
`;

const PurchaseHistoryHighlightContainer = styled.div`
  padding: 12px;
  border-radius: 16px;
  transition: all 0.3s ease-in-out;
  
  ${({ isGlowing }) => isGlowing && css`
    box-shadow: 0 0 12px 4px rgba(232, 144, 49, 0.4), 0 0 20px 8px rgba(232, 144, 49, 0.2);
    background: rgba(232, 144, 49, 0.1);
    border: 1px solid rgba(232, 144, 49, 0.3);
    transform: scale(1.02);

    body.dark-mode & {
      box-shadow: 0 0 12px 4px rgba(237, 165, 74, 0.5), 0 0 20px 8px rgba(237, 165, 74, 0.3);
      background: rgba(237, 165, 74, 0.1);
      border-color: rgba(237, 165, 74, 0.4);
    }
  `}
`;

const PurchaseHistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: var(--color-text);
    background: rgba(232, 144, 49, 0.1);
  }
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HistoryItem = styled.div`
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.05);

  body.dark-mode & {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

const HistoryItemContent = styled.div`
  flex: 1;
`;

const StoreName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 4px;
`;

const ModalItemName = styled.div`
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
`;

const HistoryChips = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const HistoryChip = styled.div`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  
  ${props => props.variant === 'exact' && css`
    background: rgba(0, 0, 0, 0.06);
    color: var(--color-text-secondary);
  `}
  
  ${props => props.variant === 'similar' && css`
    background: linear-gradient(135deg, rgba(232, 144, 49, 0.15), rgba(232, 144, 49, 0.1));
    border: 1px solid rgba(232, 144, 49, 0.25);
    color: #D97706;
  `}
  
  ${props => props.variant === 'time' && css`
    background: rgba(0, 0, 0, 0.04);
    color: var(--color-text-secondary);
  `}
`;

const PriceTag = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
`;

// Main Components
const GroceryItemModal = ({ showAnnotations = false }) => {
  const { t } = useTranslation();
  const modalData = t('features.purchaseMemory.modal', { returnObjects: true });
  const [modalAnnotationPhase, setModalAnnotationPhase] = useState('none');

  useEffect(() => {
    if (!showAnnotations) {
      setModalAnnotationPhase('none');
      return;
    }

    const timer = setTimeout(() => {
      setModalAnnotationPhase('history');
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAnnotations]);

  return (
    <ModalContainer
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
            staggerChildren: 0.1
          }
        }
      }}
    >
      <ModalHeader
        variants={{
          hidden: { y: 20 },
          visible: { y: 0, transition: { duration: 0.4 } }
        }}
        isDimmed={modalAnnotationPhase === 'history'}
      >
        <ItemTitle>{modalData.itemTitle}</ItemTitle>
        <CategoryChips>
          {modalData.categories.map((category, index) => (
            <CategoryChip key={index}>{category}</CategoryChip>
          ))}
        </CategoryChips>
      </ModalHeader>

      <LastPurchasedSection
        variants={{
          hidden: { y: 20 },
          visible: { y: 0, transition: { duration: 0.4 } }
        }}
        isDimmed={modalAnnotationPhase === 'history'}
      >
        <PurchaseCard>
          <PurchaseLabel>{modalData.exactItemLabel}</PurchaseLabel>
          <PurchaseTime>{modalData.timeExact}</PurchaseTime>
        </PurchaseCard>
        <PurchaseCard>
          <PurchaseLabel>{modalData.similarItemLabel}</PurchaseLabel>
          <PurchaseTime>{modalData.timeSimilar}</PurchaseTime>
        </PurchaseCard>
      </LastPurchasedSection>

      <ModalAnnotationText
        key={modalAnnotationPhase}
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
          exit: { opacity: 0, y: 10, transition: { duration: 0.2, ease: "easeIn" } }
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {modalAnnotationPhase === 'history' 
          ? modalData.annotation
          : ' '}
      </ModalAnnotationText>

      <PurchaseHistorySection
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
        }}
      >
        <PurchaseHistoryHighlightContainer isGlowing={modalAnnotationPhase === 'history'}>
          <PurchaseHistoryHeader>
            <SectionTitle>{modalData.historyTitle}</SectionTitle>
            <ViewAllButton>
              {modalData.viewAllButton} <ChevronRight size={14} />
            </ViewAllButton>
          </PurchaseHistoryHeader>
          <HistoryList>
            {modalData.history.map((item, index) => (
              <HistoryItem key={index}>
                <HistoryItemContent>
                  <StoreName>{item.store}</StoreName>
                  <ModalItemName>{item.product}</ModalItemName>
                  <HistoryChips>
                    <HistoryChip variant={item.type.toLowerCase()}>{item.type}</HistoryChip>
                    <HistoryChip variant="time">{item.time}</HistoryChip>
                  </HistoryChips>
                </HistoryItemContent>
                <PriceTag>{item.price}</PriceTag>
              </HistoryItem>
            ))}
          </HistoryList>
        </PurchaseHistoryHighlightContainer>
      </PurchaseHistorySection>
    </ModalContainer>
  );
};

const PurchaseMemoryMockup = ({ onShowModal, onInfoPress, infoPressed, startAnimation }) => {
  const { t } = useTranslation();
  const groceryItems = t('features.purchaseMemory.groceryItems', { returnObjects: true });
  const annotations = t('features.purchaseMemory.annotations', { returnObjects: true });
  
  const [annotationPhase, setAnnotationPhase] = useState('none');
  const [loopKey, setLoopKey] = useState(0);
  const [hasTriggeredModal, setHasTriggeredModal] = useState(false);

  useEffect(() => {
    if (!startAnimation) return;

    const timers = [
      setTimeout(() => setAnnotationPhase('orange'), 2000),
      setTimeout(() => setAnnotationPhase('grey'), 6000),
      setTimeout(() => {
        setAnnotationPhase('none');
        if (onInfoPress && !hasTriggeredModal) {
          setHasTriggeredModal(true);
          setTimeout(() => onInfoPress(), 500);
          setTimeout(() => onShowModal && onShowModal(), 1800);
        }
        setLoopKey(prevKey => prevKey + 1);
      }, 10000)
    ];

    return () => timers.forEach(clearTimeout);
  }, [startAnimation, loopKey]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  const getAnnotationText = () => {
    if (annotationPhase === 'orange') return annotations.categoryRecent;
    if (annotationPhase === 'grey') return annotations.exactItem;
    return ' ';
  };

  return (
    <PurchaseMemoryContainer
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.05 } }
      }}
    >
      <ListHeader isDimmed={annotationPhase !== 'none'}>
        <ListTitle>{t('features.purchaseMemory.listTitle')}</ListTitle>
        <ListSubtitle>{t('features.purchaseMemory.listSubtitle')}</ListSubtitle>
      </ListHeader>

      <AnimatePresence mode="wait">
        <AnnotationText
          key={annotationPhase + loopKey}
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
            exit: { opacity: 0, y: 10, transition: { duration: 0.2, ease: "easeIn" } }
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {getAnnotationText()}
        </AnnotationText>
      </AnimatePresence>
      
      <ListItemsContainer>
        {groceryItems.map((item, index) => (
          <ListItem
            key={item.id}
            custom={index}
            variants={itemVariants} 
            isDimmed={annotationPhase !== 'none' && index !== 0}
          >
            <ItemIcon style={annotationPhase !== 'none' && index !== 0 ? {opacity: 0.3} : {}}>{item.emoji}</ItemIcon>
            <ItemContent style={annotationPhase !== 'none' && index !== 0 ? {opacity: 0.3} : {}}>
              <ItemName>{item.name}</ItemName>
              <ItemChips>
                {item.categoryTag && (
                  <Chip 
                    variant="primary"
                    isGlowing={index === 0 && annotationPhase === 'orange'}
                    isDimmed={index === 0 && annotationPhase === 'grey'}
                  >
                    <Clock size={10} />
                    {item.categoryTag}
                  </Chip>
                )}
                <Chip 
                  variant="secondary"
                  isGlowing={index === 0 && annotationPhase === 'grey'}
                  isDimmed={index === 0 && annotationPhase === 'orange'}
                >
                  <Clock size={10} />
                  {item.genericDays}
                </Chip>
              </ItemChips>
            </ItemContent>
            <InfoButton 
              isDimmed={annotationPhase !== 'none' && index !== 0}
              isPressed={index === 0 && infoPressed}
            >
              <Info size={16} />
            </InfoButton>
          </ListItem>
        ))}
      </ListItemsContainer>
    </PurchaseMemoryContainer>
  );
};

const PurchaseMemoryWithModal = ({ startAnimation }) => {
  const [showModal, setShowModal] = useState(false);
  const [infoPressed, setInfoPressed] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setInfoPressed(false);
      setResetKey(prev => prev + 1);
    }, 8000);
  };

  const handleInfoPress = () => {
    setInfoPressed(true);
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '400px', 
      height: '600px',
      maxWidth: '100%'
    }}>
      <AnimatePresence mode="wait">
        {!showModal && (
          <motion.div
            key={resetKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <PurchaseMemoryMockup 
              onShowModal={handleShowModal}
              onInfoPress={handleInfoPress}
              infoPressed={infoPressed}
              startAnimation={startAnimation}
            />
          </motion.div>
        )}
      </AnimatePresence>
    
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '24px', zIndex: 10
            }}
          >
            <GroceryItemModal showAnnotations={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PurchaseMemoryFeature = () => {
  const { t } = useTranslation();
  const [startComplexAnimation, setStartComplexAnimation] = useState(false);

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
            <Clock />
          </FeatureIcon>
          <FeatureTitle variants={fadeInUp}>
            {t('features.purchaseMemory.title')}
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            {t('features.purchaseMemory.description')}
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="🧠">
              {t('features.purchaseMemory.feature1')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🗑️">
              {t('features.purchaseMemory.feature2')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="📅">
              {t('features.purchaseMemory.feature3')}
            </FeatureListItem>
          </FeatureList>
          <DownloadBadges />
        </ContentSide>
        <GraphicSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
          onAnimationComplete={() => setStartComplexAnimation(true)}
        >
          <PurchaseMemoryWithModal startAnimation={startComplexAnimation} />
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default PurchaseMemoryFeature;
