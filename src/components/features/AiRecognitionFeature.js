import React from 'react';
import { Brain } from 'lucide-react';
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
  MockupContainer,
  MockupScreen,
  containerVariants,
  slideInLeft,
  fadeInUp,
  iconVariants
} from './StyledFeatureComponents';

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
          <MockupContainer>
            <MockupScreen>
              <h3>AI Recognition</h3>
              <p>Type anything, we'll understand</p>
              <div className="mock-list">
                <div className="mock-item">
                  <span>"tomatos" → 🍅 Tomatoes</span>
                </div>
                <div className="mock-item">
                  <span>"melk" → 🥛 Milk</span>
                </div>
                <div className="mock-item">
                  <span>"pain" → 🍞 Bread</span>
                </div>
                <div className="mock-item">
                  <span>"chkn brst" → 🐔 Chicken Breast</span>
                </div>
              </div>
            </MockupScreen>
          </MockupContainer>
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default AiRecognitionFeature; 