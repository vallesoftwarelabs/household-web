import React from 'react';
import styled from 'styled-components';

const HowItWorksWrapper = styled.section`
  padding: 4rem 0;
  background-color: #fff; // White background for this section
  text-align: center;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const HowItWorksInner = styled.div`
  max-width: 1600px;
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
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  width: 100%;
  
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

const StepCard = styled.div`
  flex: 1 1 0;
  min-width: 260px;
  max-width: 350px;
  padding: 1.5rem;

  @media (min-width: 992px) {
    min-width: 260px;
    max-width: none;
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #6a11cb;
    display: inline-block;
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
      <HowItWorksInner>
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
      </HowItWorksInner>
    </HowItWorksWrapper>
  );
};

export default HowItWorks; 