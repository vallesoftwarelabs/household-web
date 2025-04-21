import React from 'react';
import styled from 'styled-components';

// Modified to extend full width
const FeaturesWrapper = styled.section`
  padding: 4rem 0; // Remove horizontal padding
  background-color: var(--color-features-bg); // Use specific features background
  width: 100vw; // Full viewport width
  margin-left: calc(-50vw + 50%); // Negative margin trick to extend full width
  position: relative; // Ensure proper stacking context
  transition: background-color 0.3s ease; // Add transition

  @media (max-width: 768px) {
    padding: 3rem 0; // Keep vertical padding, remove horizontal
  }

  @media (max-width: 480px) {
    padding: 2rem 0; // Keep vertical padding, remove horizontal
  }
`;

// Update FeaturesInner for more space
const FeaturesInner = styled.div`
  max-width: 1600px; // Significantly wider container
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-text); // Use theme text
  margin-bottom: 3rem;
  transition: color 0.3s ease; // Add transition
  // This title isn't explicitly in the screenshot for this section,
  // but adding it for structure. Can be removed if not desired.
  // Or we can add the "How It Works" title here later.

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// Adjust container spacing
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem; // Slightly reduce gap
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`;

// Adjust FeatureCard to be more squared
const FeatureCard = styled.div`
  background-color: var(--color-card-bg); // Use card background variable
  padding: 2.5rem; // Reduce padding to make more compact
  border-radius: 10px; // Slightly smaller radius
  box-shadow: var(--card-shadow); // Use card shadow variable
  text-align: left;
  
  // Make cards more square-like on larger screens
  flex: 1 1 0;
  
  // Width adjustments
  min-width: 320px; // Slightly reduce min width
  transition: background-color 0.3s ease, box-shadow 0.3s ease; // Add transitions
  
  // On larger screens, set aspect ratio close to 1:1
  @media (min-width: 1200px) {
    max-width: 380px; // Constrain width for more squared appearance
    min-height: 340px; // Set minimum height to keep relatively square
    display: flex;
    flex-direction: column;
  }
  
  // Medium screens
  @media (max-width: 1199px) {
    max-width: 480px; // Reduced from 550px
    margin-bottom: 1rem;
  }

  // Icon sizing
  .icon {
    font-size: 2.25rem; // Slightly reduced
    margin-bottom: 1.25rem;
    // Emojis don't take color variable, keep as is
  }

  // Text sizing
  h3 {
    font-size: 1.4rem; // Slightly reduced
    font-weight: bold;
    color: var(--color-text); // Use theme text
    margin-bottom: 0.9rem;
    transition: color 0.3s ease; // Add transition
  }

  p {
    font-size: 1.1rem; // Slightly reduced
    color: var(--color-text-secondary); // Use secondary theme text
    line-height: 1.6;
    transition: color 0.3s ease; // Add transition
  }
`;

// Update the icon components to better match new descriptions
const TimeIcon = () => <span className="icon">⌚</span>;
const AIIcon = () => <span className="icon">🧠</span>; // Changed to brain emoji for AI
const BudgetIcon = () => <span className="icon">💰</span>; // Changed to money bag for budget

const Features = () => {
  return (
    <FeaturesWrapper>
      <FeaturesInner>
        {/* <SectionTitle>Why Choose Us?</SectionTitle> */}
        <CardsContainer>
          <FeatureCard>
            <TimeIcon />
            <h3>Save time</h3>
            <p>
              Our optimized shopping paths eliminate backtracking and wandering.
              The list will always be sorted to follow each individual stores layout.
            </p>
          </FeatureCard>
          <FeatureCard>
            <AIIcon />
            <h3>Store-specific learning</h3>
            <p>
              Our AI adapts to each unique store you visit, learning item locations and your preferences.
              The more you shop, the smarter and more personalized your routes become.
            </p>
          </FeatureCard>
          <FeatureCard>
            <BudgetIcon />
            <h3>Control costs</h3>
            <p>
              All items from your receipts are categorized, so you can track your spending in real-time.
              Make informed decisions and avoid unexpected checkout surprises.
            </p>
          </FeatureCard>
        </CardsContainer>
      </FeaturesInner>
    </FeaturesWrapper>
  );
};

export default Features; 