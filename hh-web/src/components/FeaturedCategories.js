import React from 'react';
import styled from 'styled-components';

// Extend wrapper to full width
const CategoriesWrapper = styled.section`
  // padding: 4rem 0; // Padding moved to inner content wrapper
  background-color: #e0e0e0; // Darker light mode base background
  text-align: center;
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
      z-index: 0;
      transition: opacity 0.3s ease;
      opacity: 1;
  }

  // Dark mode gradient pseudo-element
  &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(ellipse 60% 80% at top right, #EDA54A 0%, #333333 75%);
      filter: blur(20px);
      z-index: -1;
      transform: scale(1.1);
      opacity: 0;
      transition: opacity 0.3s ease;
  }

  body.dark-mode & {
    background-color: transparent; /* Override light mode bg */
    &::before { opacity: 0; }
    &::after { opacity: 1; z-index: 0; }
  }

  @media (max-width: 768px) {
    // padding: 3rem 0; // Padding moved to inner content wrapper
  }

  @media (max-width: 480px) {
    // padding: 2rem 0; // Padding moved to inner content wrapper
  }
`;

// Add inner container for proper content width
const CategoriesInner = styled.div`
  max-width: 1600px; // Wider container
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
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-text); // Use theme text
  margin-bottom: 2.5rem; // Slightly reduced margin
  transition: color 0.3s ease; // Add transition

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// Updated container styling for tag-like cards
const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem; // Reduced gap between cards
  flex-wrap: wrap;
  max-width: 900px; // Limit maximum width
  margin: 0 auto; // Center the container
`;

// Redesigned cards to be smaller, tag-like, with horizontal layout
const CategoryCard = styled.div`
  // background-color: var(--color-card-bg); // Replaced by gradient background
  border-radius: 2rem; // Rounded pill shape
  box-shadow: var(--card-shadow); // Use card shadow variable
  text-align: center;
  // border: 1px solid var(--color-border, rgba(0, 0, 0, 0.05)); // Replaced by gradient border
  position: relative; // Needed for pseudo-element positioning
  overflow: hidden; // Ensure gradient clipping with large radius
  transition: all 0.2s ease, box-shadow 0.3s ease; // Adjusted transitions
  padding: 2px; // Create space for the 2px gradient border
  background: linear-gradient(to right, #FCA46D, #C76D52); // Gradient applied directly

  // Pseudo-element for inner background (both modes)
  &::before {
      content: '';
      position: absolute;
      inset: 2px;
      background: var(--color-card-bg); // Use theme variable for inner bg
      border-radius: calc(2rem - 2px); /* Original radius - inset */
      z-index: 1; // Sits behind content wrapper
      transition: background-color 0.3s ease; // Transition inner background
  }

  // Remove previous pseudo-elements
  // &::after { ... }

  // Remove dark mode block
  // body.dark-mode & { ... }
  
  &:hover {
    transform: translateY(-2px); // Slight lift on hover
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Keep hover shadow simple or create variable later
  }

  // Redesigned icon
  .icon {
    font-size: 1.2rem; // Smaller icon
    margin-right: 0.6rem; // Space between icon and text
    color: var(--color-text); // Use theme text for emoji/icon holder
    // Emoji color itself won't change
  }

  h3 {
    font-size: 0.95rem; // Smaller text
    font-weight: 600; // Slightly lighter weight
    color: var(--color-text); // Use theme text
    margin: 0; // Remove default margins
    transition: color 0.3s ease; // Add transition
  }
`;

// Inner wrapper for CategoryCard content
const CategoryCardContentWrapper = styled.div`
  position: relative;
  z-index: 2; // Ensure content is above the ::before pseudo-element
  padding: 0.7rem 1.2rem; // Original padding
  display: inline-flex; // Original layout styles
  align-items: center; // Original layout styles
`;

// Add a new styled component for the "more" tag
const MoreCategoriesTag = styled(CategoryCard)`
  background-color: var(--color-tag-more-bg); // Use specific variable
  font-style: italic; // Italicize text
  
  h3 {
    font-weight: 500; // Lighter weight
    color: var(--color-text-secondary); // Use secondary text color
  }
  
  // Optional: add slight dash-like border
  border: 1px dashed var(--color-border, rgba(0, 0, 0, 0.1)); // Use border var with fallback
`;

// Add a more icon
const MoreIcon = () => <span className="icon">✨</span>; // Sparkles emoji

// Placeholder Icons (replace with actual icons later)
const ProduceIcon = () => <span className="icon">🍎</span>;
const DairyIcon = () => <span className="icon">🥚</span>;
const MeatIcon = () => <span className="icon">🥩</span>;
const HerbsIcon = () => <span className="icon">🌿</span>;
const BakeryIcon = () => <span className="icon">🍞</span>; // Added new category
const FrozenIcon = () => <span className="icon">❄️</span>; // Added new category
const BeveragesIcon = () => <span className="icon">🥤</span>; // Added new category
const SnacksIcon = () => <span className="icon">🍿</span>; // Added new category

const FeaturedCategories = () => {
  return (
    <CategoriesWrapper>
      <CategoriesInner>
        <SectionTitle>Categories</SectionTitle>
        <CategoriesContainer>
          <CategoryCard>
            <CategoryCardContentWrapper>
              <ProduceIcon />
              <h3>Fresh produce</h3>
            </CategoryCardContentWrapper>
          </CategoryCard>
          <CategoryCard>
            <CategoryCardContentWrapper>
              <DairyIcon />
              <h3>Dairy & eggs</h3>
            </CategoryCardContentWrapper>
          </CategoryCard>
          <CategoryCard>
            <CategoryCardContentWrapper>
              <MeatIcon />
              <h3>Meat</h3>
            </CategoryCardContentWrapper>
          </CategoryCard>
          <CategoryCard>
            <CategoryCardContentWrapper>
              <HerbsIcon />
              <h3>Fresh herbs</h3>
            </CategoryCardContentWrapper>
          </CategoryCard>
          <CategoryCard>
            <CategoryCardContentWrapper>
              <BakeryIcon />
              <h3>Bakery</h3>
            </CategoryCardContentWrapper>
          </CategoryCard>
          <CategoryCard>
            <CategoryCardContentWrapper>
              <FrozenIcon />
              <h3>Frozen meals</h3>
            </CategoryCardContentWrapper>
          </CategoryCard>
          <CategoryCard>
            <CategoryCardContentWrapper>
              <BeveragesIcon />
              <h3>Beverages</h3>
            </CategoryCardContentWrapper>
          </CategoryCard>
          <CategoryCard>
            <CategoryCardContentWrapper>
              <SnacksIcon />
              <h3>Snacks</h3>
            </CategoryCardContentWrapper>
          </CategoryCard>
          <MoreCategoriesTag>
            <CategoryCardContentWrapper>
              <MoreIcon />
              <h3>...and a lot more!</h3>
            </CategoryCardContentWrapper>
          </MoreCategoriesTag>
        </CategoriesContainer>
      </CategoriesInner>
    </CategoriesWrapper>
  );
};

export default FeaturedCategories; 