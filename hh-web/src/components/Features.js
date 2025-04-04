import React from 'react';
import styled from 'styled-components';

const FeaturesWrapper = styled.section`
  padding: 4rem 3rem;
  background-color: #f9f9f9; // Light grey background
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 3rem;
  // This title isn't explicitly in the screenshot for this section,
  // but adding it for structure. Can be removed if not desired.
  // Or we can add the "How It Works" title here later.
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around; // Distribute space
  gap: 2rem; // Space between cards
  flex-wrap: wrap; // Allow wrapping on smaller screens
`;

const FeatureCard = styled.div`
  background-color: #fff; // White background for cards
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); // Subtle shadow
  text-align: left; // Align text to the left within the card
  flex: 1; // Allow cards to grow
  min-width: 280px; // Minimum width before wrapping
  max-width: 350px; // Maximum width

  // Placeholder for Icon
  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    // In a real implementation, use an SVG or icon font
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

// Placeholder Icons (replace with actual icons later)
const TimeIcon = () => <span className="icon">⏰</span>;
const QualityIcon = () => <span className="icon">🌿</span>;
const DeliveryIcon = () => <span className="icon">🚚</span>;

const Features = () => {
  return (
    <FeaturesWrapper>
      {/* <SectionTitle>Why Choose Us?</SectionTitle> */}
      <CardsContainer>
        <FeatureCard>
          <TimeIcon />
          <h3>Time-saving Shopping</h3>
          <p>
            Skip the lines and shop from anywhere. Save hours every week with
            our efficient online platform.
          </p>
        </FeatureCard>
        <FeatureCard>
          <QualityIcon />
          <h3>Fresh Quality Guaranteed</h3>
          <p>
            We source the freshest products daily. Quality and freshness
            guaranteed or your money back.
          </p>
        </FeatureCard>
        <FeatureCard>
          <DeliveryIcon />
          <h3>Convenient Delivery</h3>
          <p>
            Choose your delivery time and we'll bring your groceries right to
            your door.
          </p>
        </FeatureCard>
      </CardsContainer>
    </FeaturesWrapper>
  );
};

export default Features; 