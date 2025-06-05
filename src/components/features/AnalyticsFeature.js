import React from 'react';
import { TrendingUp } from 'lucide-react';
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
  slideInRight,
  fadeInUp,
  iconVariants
} from './StyledFeatureComponents';

const AnalyticsFeature = () => {
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
            Spending Analytics
          </FeatureTitle>
          <FeatureDescription variants={fadeInUp}>
            Get detailed insights into your spending habits. Track expenses by category, compare costs across different stores, and identify where your money goes to make smarter financial decisions.
          </FeatureDescription>
          <FeatureList variants={containerVariants}>
            <FeatureListItem variants={fadeInUp} emoji="📈">
              Category-wise spending breakdown
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="🏪">
              Compare prices across stores
            </FeatureListItem>
            <FeatureListItem variants={fadeInUp} emoji="💡">
              Smart budgeting insights
            </FeatureListItem>
          </FeatureList>
        </ContentSide>
        <GraphicSide
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <MockupContainer>
            <MockupScreen>
              <h3>Spending Analytics</h3>
              <p>This Month: $487.23</p>
              <div className="mock-list">
                <div className="mock-item">
                  <span>🥬 Fresh Produce</span>
                  <span>$125.50</span>
                </div>
                <div className="mock-item">
                  <span>🥩 Meat & Seafood</span>
                  <span>$98.75</span>
                </div>
                <div className="mock-item">
                  <span>🥛 Dairy & Eggs</span>
                  <span>$67.20</span>
                </div>
                <div className="mock-item">
                  <span>🍞 Bakery</span>
                  <span>$43.15</span>
                </div>
              </div>
            </MockupScreen>
          </MockupContainer>
        </GraphicSide>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default AnalyticsFeature; 