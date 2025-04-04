import React from 'react';
import styled from 'styled-components';

const HowItWorksWrapper = styled.section`
  padding: 4rem 3rem;
  background-color: #fff; // White background for this section
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem; // Reduce padding
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; // Further reduce padding
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
      <SectionTitle>Getting Started is Easy</SectionTitle>
      <Subtitle>
        Enjoy fresh groceries delivered in just 3 simple steps:
      </Subtitle>
      <StepsContainer>
        <StepCard>
          <BrowseIcon />
          <h3>1. Browse & Select</h3>
          <p>
            Explore our wide selection and easily add your favorite items to the
            cart.
          </p>
        </StepCard>
        <StepCard>
          <ScheduleIcon />
          <h3>2. Schedule Delivery</h3>
          <p>
            Pick a convenient delivery time slot that fits perfectly into your
            schedule.
          </p>
        </StepCard>
        <StepCard>
          <ReceiveIcon />
          <h3>3. Receive Groceries</h3>
          <p>
            Relax while we deliver your fresh groceries right to your doorstep.
          </p>
        </StepCard>
      </StepsContainer>
    </HowItWorksWrapper>
  );
};

export default HowItWorks; 