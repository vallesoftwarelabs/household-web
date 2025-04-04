import React from 'react';
import styled from 'styled-components';

const CategoriesWrapper = styled.section`
  padding: 4rem 3rem;
  background-color: #f9f9f9; // Match the Features background
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 3rem;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center; // Center the cards
  gap: 2rem;
  flex-wrap: wrap;
`;

const CategoryCard = styled.div`
  background-color: #fff;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  flex: 0 1 200px; // Flex properties for sizing
  min-width: 180px;

  // Placeholder for Icon
  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333; // Simple black icon color for now
    display: block;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
  }
`;

// Placeholder Icons (replace with actual icons later)
const ProduceIcon = () => <span className="icon">🍎</span>;
const DairyIcon = () => <span className="icon">🥚</span>;
const MeatIcon = () => <span className="icon">🥩</span>;
const PantryIcon = () => <span className="icon">📦</span>;

const FeaturedCategories = () => {
  return (
    <CategoriesWrapper>
      <SectionTitle>Featured Categories</SectionTitle>
      <CategoriesContainer>
        <CategoryCard>
          <ProduceIcon />
          <h3>Fresh Produce</h3>
        </CategoryCard>
        <CategoryCard>
          <DairyIcon />
          <h3>Dairy & Eggs</h3>
        </CategoryCard>
        <CategoryCard>
          <MeatIcon />
          <h3>Meat & Seafood</h3>
        </CategoryCard>
        <CategoryCard>
          <PantryIcon />
          <h3>Pantry Essentials</h3>
        </CategoryCard>
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};

export default FeaturedCategories; 