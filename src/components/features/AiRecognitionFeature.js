import React from 'react';
import { Brain } from 'lucide-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

// Styled components for AI Recognition animation
const AiRecognitionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 60px 20px;
  
  @media (max-width: 768px) {
    padding: 40px 10px;
    gap: 24px;
  }
`;

const HeaderRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-bottom: 16px;
  
  @media (max-width: 480px) {
    gap: 0;
  }
`;

const HeaderLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  
  ${props => props.side === 'left' && `
    max-width: 200px;
  `}
  
  ${props => props.side === 'right' && `
    width: 200px;
  `}
  
  @media (max-width: 768px) {
    font-size: 12px;
    ${props => props.side === 'left' && `
      max-width: 150px;
    `}
    
    ${props => props.side === 'right' && `
      width: 150px;
    `}
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const HeaderSpacer = styled.div`
  width: 120px;
  height: 20px;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileHeaderLabel = styled.div`
  display: none;
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  
  @media (max-width: 480px) {
    display: block;
  }
`;

const ExampleRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const InputText = styled(motion.div)`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-secondary);
  font-style: italic;
  letter-spacing: -0.5px;
  position: relative;
  max-width: 200px;
  line-height: 1.3;
  text-align: center;
  
  &::before {
    content: '"';
    color: var(--color-text-secondary);
    opacity: 0.6;
  }
  
  &::after {
    content: '"';
    color: var(--color-text-secondary);
    opacity: 0.6;
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
    max-width: 180px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    max-width: 100%;
  }
`;

const ArrowContainer = styled.div`
  position: relative;
  width: 120px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 80px;
  }
  
  @media (max-width: 480px) {
    width: 20px;
    height: 60px;
    flex-shrink: 0;
  }
`;

const ArrowLine = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100px;
  height: 2px;
  background: transparent;
  background-image: repeating-linear-gradient(
    to right,
    rgba(232, 144, 49, 0.8) 0px,
    rgba(232, 144, 49, 0.8) 6px,
    transparent 6px,
    transparent 12px
  );
  transform: translateY(-50%);
  transform-origin: left center;
  border-radius: 1px;
  overflow: hidden;
  
  body.dark-mode & {
    background-image: repeating-linear-gradient(
      to right,
      rgba(237, 165, 74, 0.8) 0px,
      rgba(237, 165, 74, 0.8) 6px,
      transparent 6px,
      transparent 12px
    );
  }
  
  @media (max-width: 480px) {
    /* Rotate to vertical */
    left: 50%;
    top: 0;
    width: 2px;
    height: 60px;
    transform: translateX(-50%);
    transform-origin: center top;
    background-image: repeating-linear-gradient(
      to bottom,
      rgba(232, 144, 49, 0.8) 0px,
      rgba(232, 144, 49, 0.8) 6px,
      transparent 6px,
      transparent 12px
    );
    
    body.dark-mode & {
      background-image: repeating-linear-gradient(
        to bottom,
        rgba(237, 165, 74, 0.8) 0px,
        rgba(237, 165, 74, 0.8) 6px,
        transparent 6px,
        transparent 12px
      );
    }
  }
`;

const ArrowHead = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-100%, -40%);
  width: 0;
  height: 0;
  border-left: 8px solid rgba(232, 144, 49, 0.8);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  
  body.dark-mode & {
    border-left-color: rgba(237, 165, 74, 0.8);
  }
  
  @media (max-width: 480px) {
    /* Rotate to point downward */
    left: 50%;
    top: auto;
    bottom: 0;
    right: auto;
    transform: translate(-40%, 100%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid rgba(232, 144, 49, 0.8);
    border-bottom: none;
    
    body.dark-mode & {
      border-top-color: rgba(237, 165, 74, 0.8);
      border-left-color: transparent;
    }
  }
`;

const FlowingGradient = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 50%;
  height: 4px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(232, 144, 49, 1) 50%,
    transparent 100%
  );
  transform: translateY(-50%);
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(232, 144, 49, 0.4);
  
  body.dark-mode & {
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(237, 165, 74, 1) 50%,
      transparent 100%
    );
    box-shadow: 0 0 6px rgba(237, 165, 74, 0.6);
  }
`;

const OutputContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  
  @media (max-width: 480px) {
  margin-top: 16px;
  margin-bottom: 16px;
    flex-direction: row;
    gap: 12px;
    justify-content: center;
    align-items: stretch;
  }
`;

const TagContainer = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(232, 144, 49, 0.15) 0%,
    rgba(232, 144, 49, 0.1) 100%
  );
  border: 1px solid rgba(232, 144, 49, 0.25);
  border-radius: 12px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  box-shadow: 0 2px 8px rgba(232, 144, 49, 0.1);
  text-align: left;
  
  body.dark-mode & {
    background: linear-gradient(135deg, 
      rgba(237, 165, 74, 0.2) 0%,
      rgba(237, 165, 74, 0.15) 100%
    );
    border-color: rgba(237, 165, 74, 0.3);
    box-shadow: 0 2px 8px rgba(237, 165, 74, 0.15);
  }
`;

const CategoryContainer = styled(motion.div)`
  background: var(--color-card-bg);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  text-align: left;
  
  body.dark-mode & {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const TagLabel = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: #D97706;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  body.dark-mode & {
    color: #EDA54A;
  }
`;

const TagValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: -0.2px;
`;

const CategoryLabel = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CategoryValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: -0.2px;
`;

const ShimmerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(232, 144, 49, 0.8) 50%,
    transparent 100%
  );
  transform: translateX(-100%);
  animation: shimmerHorizontal 3s infinite ease-in-out;
  animation-delay: 2s;
  
  @keyframes shimmerHorizontal {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes shimmerVertical {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  
  body.dark-mode & {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    );
  }
  
  @media (max-width: 480px) {
    /* Vertical shimmer for mobile */
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(232, 144, 49, 0.8) 50%,
      transparent 100%
    );
    transform: translateY(-100%);
    animation: shimmerVertical 3s infinite ease-in-out;
    animation-delay: 2s;
    
    body.dark-mode & {
      background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(255, 255, 255, 0.6) 50%,
        transparent 100%
      );
    }
  }
`;

const SimpleArrowAnimation = () => {
  return (
    <ArrowContainer>
      <ArrowLine
        initial={{ 
          opacity: 0,
          scaleX: 0,
          scaleY: 0
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
          scaleY: 1
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
      >
        <ShimmerOverlay />
      </ArrowLine>
      
      <ArrowHead
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 1.2
        }}
      />
    </ArrowContainer>
  );
};

const AiRecognitionGraphic = () => {
  const { t } = useTranslation();
  const examples = t('features.aiRecognition.examples', { returnObjects: true });
  return (
    <AiRecognitionContainer
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.4
          }
        }
      }}
    >
      <HeaderRow
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
          }
        }}
      >
        <HeaderLabel side="left">{t('features.aiRecognition.headerLeft')}</HeaderLabel>
        <HeaderSpacer />
        <HeaderLabel side="right">{t('features.aiRecognition.headerRight')}</HeaderLabel>
        <MobileHeaderLabel>{t('features.aiRecognition.mobileHeader')}</MobileHeaderLabel>
      </HeaderRow>

      <ExampleRow
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5,
              when: "beforeChildren",
              staggerChildren: 0.3
            }
          }
        }}
      >
        <InputText
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          {examples[0]?.input}
        </InputText>
        
        <ArrowContainer>
          <SimpleArrowAnimation />
        </ArrowContainer>
        
        <OutputContainer
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.5, 
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
              }
            }
          }}
        >
          <TagContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <TagLabel>{t('features.aiRecognition.tagLabel')}</TagLabel>
            <TagValue>{examples[0]?.tag}</TagValue>
          </TagContainer>
          
          <CategoryContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <CategoryLabel>{t('features.aiRecognition.categoryLabel')}</CategoryLabel>
            <CategoryValue>{examples[0]?.category}</CategoryValue>
          </CategoryContainer>
        </OutputContainer>
      </ExampleRow>

      <ExampleRow
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5,
              when: "beforeChildren",
              staggerChildren: 0.3
            }
          }
        }}
      >
        <InputText
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          {examples[1]?.input}
        </InputText>
        
        <ArrowContainer>
          <SimpleArrowAnimation />
        </ArrowContainer>
        
        <OutputContainer
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.5, 
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
              }
            }
          }}
        >
          <TagContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <TagLabel>{t('features.aiRecognition.tagLabel')}</TagLabel>
            <TagValue>{examples[1]?.tag}</TagValue>
          </TagContainer>
          
          <CategoryContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <CategoryLabel>{t('features.aiRecognition.categoryLabel')}</CategoryLabel>
            <CategoryValue>{examples[1]?.category}</CategoryValue>
          </CategoryContainer>
        </OutputContainer>
      </ExampleRow>

      <ExampleRow
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5,
              when: "beforeChildren",
              staggerChildren: 0.3
            }
          }
        }}
      >
        <InputText
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          {examples[2]?.input}
        </InputText>
        
        <ArrowContainer>
          <SimpleArrowAnimation />
        </ArrowContainer>
        
        <OutputContainer
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.5, 
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
              }
            }
          }}
        >
          <TagContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <TagLabel>{t('features.aiRecognition.tagLabel')}</TagLabel>
            <TagValue>{examples[2]?.tag}</TagValue>
          </TagContainer>
          
          <CategoryContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <CategoryLabel>{t('features.aiRecognition.categoryLabel')}</CategoryLabel>
            <CategoryValue>{examples[2]?.category}</CategoryValue>
          </CategoryContainer>
        </OutputContainer>
      </ExampleRow>
    </AiRecognitionContainer>
  );
};

const AiRecognitionFeature = () => {
  const { t } = useTranslation();
  
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
            <Brain />
          </FeatureIcon>
          <FeatureTitle variants={fadeInUp}>
            {t('features.aiRecognition.title')}
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            {t('features.aiRecognition.description')}
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="🌍">
              {t('features.aiRecognition.feature1')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🏷️">
              {t('features.aiRecognition.feature2')}
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🧾">
              {t('features.aiRecognition.feature3')}
            </FeatureListItem>
          </FeatureList>
          <DownloadBadges />
        </ContentSide>
        <GraphicSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <AiRecognitionGraphic />
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default AiRecognitionFeature; 