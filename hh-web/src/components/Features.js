import React from 'react';
import styled from 'styled-components';

// Modified to extend full width
const FeaturesWrapper = styled.section`
  // padding: 4rem 0; // Padding moved to inner content wrapper
  background-color: #e0e0e0; // Darker light mode base background
  width: 100vw; // Full viewport width
  margin-left: calc(-50vw + 50%); // Negative margin trick to extend full width
  position: relative; // Ensure proper stacking context for pseudo-elements
  overflow: hidden; // Contain the pseudo-elements
  transition: background-color 0.3s ease; // Adjust transition

  // Light mode gradient pseudo-element
  &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(ellipse 60% 80% at 100% 0%, #E89031 0%, rgba(232, 144, 49, 0) 70%);
      z-index: 0; // Behind content but above dark mode pseudo-element
      transition: opacity 0.3s ease;
      opacity: 1;
  }

  // Dark mode gradient pseudo-element (now needs higher z-index to be visible)
  &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(ellipse 60% 80% at top right, #EDA54A 0%, #333333 75%);
      filter: blur(20px);
      z-index: -1; // Place behind content and light mode pseudo-element
      transform: scale(1.1); // Ensure blur covers edges
      opacity: 0; // Hidden by default
      transition: opacity 0.3s ease;
  }

  body.dark-mode & {
    background-color: transparent; /* Override light mode bg */
    // Hide light mode gradient, show dark mode gradient
    &::before { opacity: 0; }
    &::after { opacity: 1; z-index: 0; } // Bring dark mode gradient forward
  }

  @media (max-width: 768px) {
    // padding: 3rem 0; // Padding moved to inner content wrapper
  }

  @media (max-width: 480px) {
    // padding: 2rem 0; // Padding moved to inner content wrapper
  }
`;

// Padding now applied here
const FeaturesInner = styled.div`
  max-width: 1600px; // Significantly wider container
  margin: 0 auto;
  padding: 4rem 2rem; // Apply original padding here
  position: relative; // Ensure content is above pseudo-elements
  z-index: 1;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem; // Adjust padding
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; // Adjust padding
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
  // background-color: var(--color-card-bg); // Replaced by gradient background
  border-radius: 10px; // Slightly smaller radius
  box-shadow: var(--card-shadow); // Use card shadow variable
  text-align: left;
  // border: 1px solid rgba(0, 0, 0, 0.05); // Replaced by gradient border
  position: relative; // Needed for pseudo-element positioning
  overflow: hidden; // Ensure gradient clipping
  transition: box-shadow 0.3s ease; // Adjusted transitions
  padding: 2px; // Create space for the 2px gradient border
  background: linear-gradient(to right, #FCA46D, #C76D52); // Gradient applied directly

  // Pseudo-element for inner background (both modes)
  &::before {
      content: '';
      position: absolute;
      inset: 2px;
      background: var(--color-card-bg);
      border-radius: 8px; /* 10px (card radius) - 2px (inset) */
      z-index: 1; // Sits behind content wrapper
      transition: background-color 0.3s ease; // Transition inner background
  }

  // Remove dark mode block
  // body.dark-mode & { ... }
  
  // Make cards more square-like on larger screens
  flex: 1 1 0;
  
  // Width adjustments
  min-width: 320px; // Slightly reduce min width
  
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

// Wrapper for content inside FeatureCard to sit above the pseudo-element bg
const CardContentWrapper = styled.div`
  position: relative;
  z-index: 2; // Ensure content is above the ::before pseudo-element
  padding: 2.5rem; // Apply the original padding here
  // Inherit text align or set explicitly if needed
  text-align: left;
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
            <CardContentWrapper>
              <TimeIcon />
              <h3>Save time</h3>
              <p>
                Our optimized shopping paths eliminate backtracking and wandering.
                The list will always be sorted to follow each individual stores layout.
              </p>
            </CardContentWrapper>
          </FeatureCard>
          <FeatureCard>
            <CardContentWrapper>
              <AIIcon />
              <h3>Store-specific learning</h3>
              <p>
                Our AI adapts to each unique store you visit, learning item locations and your preferences.
                The more you shop, the smarter and more personalized your routes become.
              </p>
            </CardContentWrapper>
          </FeatureCard>
          <FeatureCard>
            <CardContentWrapper>
              <BudgetIcon />
              <h3>Control costs</h3>
              <p>
                All items from your receipts are categorized, so you can track your spending in real-time.
                Make informed decisions and avoid unexpected checkout surprises.
              </p>
            </CardContentWrapper>
          </FeatureCard>
        </CardsContainer>
      </FeaturesInner>
    </FeaturesWrapper>
  );
};

export default Features; 