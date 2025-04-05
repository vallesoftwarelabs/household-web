import React from 'react';
import styled from 'styled-components';

// Extend wrapper to full width
const CategoriesWrapper = styled.section`
  padding: 4rem 0; // Remove horizontal padding
  background-color: #f9f9f9; // Match the Features background
  text-align: center;
  width: 100vw; // Full viewport width
  margin-left: calc(-50vw + 50%); // Negative margin trick to extend full width
  position: relative; // Ensure proper stacking context

  @media (max-width: 768px) {
    padding: 3rem 0; // Keep vertical padding, remove horizontal
  }

  @media (max-width: 480px) {
    padding: 2rem 0; // Keep vertical padding, remove horizontal
  }
`;

// Add inner container for proper content width
const CategoriesInner = styled.div`
  max-width: 1600px; // Wider container
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
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2.5rem; // Slightly reduced margin

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
  background-color: #fff;
  padding: 0.7rem 1.2rem; // Smaller padding
  border-radius: 2rem; // Rounded pill shape
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); // Lighter shadow
  text-align: center;
  display: inline-flex; // Make contents inline
  align-items: center; // Vertically center icon and text
  border: 1px solid rgba(0, 0, 0, 0.05); // Subtle border
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px); // Slight lift on hover
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Enhanced shadow on hover
  }

  // Redesigned icon
  .icon {
    font-size: 1.2rem; // Smaller icon
    margin-right: 0.6rem; // Space between icon and text
    color: #333;
  }

  h3 {
    font-size: 0.95rem; // Smaller text
    font-weight: 600; // Slightly lighter weight
    color: #333;
    margin: 0; // Remove default margins
  }
`;

// Add a new styled component for the "more" tag
const MoreCategoriesTag = styled(CategoryCard)`
  background-color: #f0f0f0; // Slightly different background
  font-style: italic; // Italicize text
  
  h3 {
    font-weight: 500; // Lighter weight
    color: #555; // Slightly different color
  }
  
  // Optional: add slight dash-like border
  border: 1px dashed rgba(0, 0, 0, 0.1);
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
            <ProduceIcon />
            <h3>Fresh produce</h3>
          </CategoryCard>
          <CategoryCard>
            <DairyIcon />
            <h3>Dairy & eggs</h3>
          </CategoryCard>
          <CategoryCard>
            <MeatIcon />
            <h3>Meat</h3>
          </CategoryCard>
          <CategoryCard>
            <HerbsIcon />
            <h3>Fresh herbs</h3>
          </CategoryCard>
          <CategoryCard>
            <BakeryIcon />
            <h3>Bakery</h3>
          </CategoryCard>
          <CategoryCard>
            <FrozenIcon />
            <h3>Frozen meals</h3>
          </CategoryCard>
          <CategoryCard>
            <BeveragesIcon />
            <h3>Beverages</h3>
          </CategoryCard>
          <CategoryCard>
            <SnacksIcon />
            <h3>Snacks</h3>
          </CategoryCard>
          <MoreCategoriesTag>
            <MoreIcon />
            <h3>...and a lot more!</h3>
          </MoreCategoriesTag>
        </CategoriesContainer>
      </CategoriesInner>
    </CategoriesWrapper>
  );
};

export default FeaturedCategories; 