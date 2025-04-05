import React from 'react';
import styled from 'styled-components';

// Modified to extend full width
const FeaturesWrapper = styled.section`
  padding: 4rem 0; // Remove horizontal padding
  background-color: #f9f9f9; // Light grey background
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
  background-color: #fff;
  padding: 2.5rem; // Reduce padding to make more compact
  border-radius: 10px; // Slightly smaller radius
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.07); // Slightly reduced shadow
  text-align: left;
  
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
  }

  // Text sizing
  h3 {
    font-size: 1.4rem; // Slightly reduced
    font-weight: bold;
    color: #333;
    margin-bottom: 0.9rem;
  }

  p {
    font-size: 1.1rem; // Slightly reduced
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
      <FeaturesInner>
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
      </FeaturesInner>
    </FeaturesWrapper>
  );
};

export default Features; 