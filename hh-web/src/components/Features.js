import React from 'react';
import styled from 'styled-components';

const FeaturesWrapper = styled.section`
  padding: 4rem 3rem;
  background-color: #f9f9f9; // Light grey background

  @media (max-width: 768px) {
    padding: 3rem 1.5rem; // Reduce padding
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; // Further reduce padding
  }
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

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around; // Keep for smaller screens
  gap: 2rem;
  flex-wrap: wrap;

  // Add max-width and center for larger screens
  max-width: 1100px; // Adjust this value based on card size + gap
  margin: 0 auto; // Center the container

  // Optionally, change justify-content on larger screens if needed
  @media (min-width: 769px) { // Apply when cards are likely side-by-side
     justify-content: center; // Center cards instead of space-around
  }
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
          <h3>Save Precious Time</h3>
          <p>
            We know your time is valuable. Skip the lines and shop from anywhere.
            Get hours back every week with our efficient online platform.
          </p>
        </FeatureCard>
        <FeatureCard>
          <QualityIcon />
          <h3>Get Guaranteed Freshness</h3>
          <p>
            You deserve the best. We source the freshest products daily.
            Enjoy top quality and freshness, guaranteed or your money back.
          </p>
        </FeatureCard>
        <FeatureCard>
          <DeliveryIcon />
          <h3>Enjoy Convenient Delivery</h3>
          <p>
            Let us handle the hassle. Choose your preferred delivery time, and
            we'll bring your groceries right to your door.
          </p>
        </FeatureCard>
      </CardsContainer>
    </FeaturesWrapper>
  );
};

export default Features; 