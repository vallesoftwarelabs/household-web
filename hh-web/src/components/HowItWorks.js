import React from 'react';
import styled from 'styled-components';

const HowItWorksWrapper = styled.section`
  padding: 4rem 3rem;
  background-color: #fff; // White background for this section
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 3rem;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;

const StepCard = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  padding: 1rem;

  // Placeholder for Icon
  .icon {
    font-size: 2.5rem; // Larger icons for this section
    margin-bottom: 1.5rem;
    color: #6a11cb; // Use accent color
    // In a real implementation, use an SVG or icon font
    display: inline-block; // Ensure margin-bottom works
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
const BrowseIcon = () => <span className="icon">🛒</span>;
const ScheduleIcon = () => <span className="icon">📅</span>;
const ReceiveIcon = () => <span className="icon">🏠</span>;

const HowItWorks = () => {
  return (
    <HowItWorksWrapper>
      <SectionTitle>How It Works</SectionTitle>
      <StepsContainer>
        <StepCard>
          <BrowseIcon />
          <h3>Browse & Select</h3>
          <p>
            Browse through our wide selection of products and add items to your
            cart
          </p>
        </StepCard>
        <StepCard>
          <ScheduleIcon />
          <h3>Schedule Delivery</h3>
          <p>
            Choose your preferred delivery time slot that works best for you
          </p>
        </StepCard>
        <StepCard>
          <ReceiveIcon />
          <h3>Receive Groceries</h3>
          <p>Get your fresh groceries delivered right to your doorstep</p>
        </StepCard>
      </StepsContainer>
    </HowItWorksWrapper>
  );
};

export default HowItWorks; 