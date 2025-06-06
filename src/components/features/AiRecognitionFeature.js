import React from 'react';
import { Brain } from 'lucide-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

// Styled components for AI Recognition animation
const AiRecognitionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 60px 20px;
`;

const HeaderRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-bottom: 16px;
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
`;

const HeaderSpacer = styled.div`
  width: 120px;
  height: 20px;
`;

const ExampleRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
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
`;

const ArrowContainer = styled.div`
  position: relative;
  width: 120px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowLine = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 50%;
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
`;

const ArrowHead = styled(motion.div)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid rgba(232, 144, 49, 0.8);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  
  body.dark-mode & {
    border-left-color: rgba(237, 165, 74, 0.8);
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

const ShimmerOverlay = styled(motion.div)`
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
  
  body.dark-mode & {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
  }
`;

const SimpleArrowAnimation = () => {
  return (
    <ArrowContainer>
      <ArrowLine
        animate={{
          width: [0, 100],
          opacity: [0, 1]
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
      >
        <ShimmerOverlay
          animate={{
            transform: ["translateX(-100%)", "translateX(100%)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </ArrowLine>
      
      <ArrowHead
        animate={{
          left: [0, 100],
          opacity: [0, 1]
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
      />
    </ArrowContainer>
  );
};

const AiRecognitionGraphic = () => {
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
        <HeaderLabel side="left">You write</HeaderLabel>
        <HeaderSpacer />
        <HeaderLabel side="right">YAGA interprets</HeaderLabel>
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
          dos cervezas
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
            <TagLabel>Tag</TagLabel>
            <TagValue>🍺 Beer</TagValue>
          </TagContainer>
          
          <CategoryContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <CategoryLabel>Category</CategoryLabel>
            <CategoryValue>Alcoholic Beverages</CategoryValue>
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
          tomeitoz
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
            <TagLabel>Tag</TagLabel>
            <TagValue>🍅 Tomato</TagValue>
          </TagContainer>
          
          <CategoryContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <CategoryLabel>Category</CategoryLabel>
            <CategoryValue>Fresh Produce</CategoryValue>
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
          the tasty bread that your mother bought last week
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
            <TagLabel>Tag</TagLabel>
            <TagValue>🍞 Bread</TagValue>
          </TagContainer>
          
          <CategoryContainer
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <CategoryLabel>Category</CategoryLabel>
            <CategoryValue>Bakery & Bread</CategoryValue>
          </CategoryContainer>
        </OutputContainer>
      </ExampleRow>
    </AiRecognitionContainer>
  );
};

const AiRecognitionFeature = () => {
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
            AI-Powered Item Recognition
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            Write your items in any language, with typos, or just quick notes—our AI automatically categorizes and corrects everything. "tomatos" becomes "Tomatoes" in "Fresh Produce" instantly.
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="🌍">
              Multi-language support
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="✨">
              Auto-correct typos
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🏷️">
              Smart categorization
            </FeatureListItem>
          </FeatureList>
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