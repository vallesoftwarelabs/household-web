import React from 'react';
import styled from 'styled-components';

import SmartSortingFeature from './features/SmartSortingFeature';
import PurchaseMemoryFeature from './features/PurchaseMemoryFeature';
import AnalyticsFeature from './features/AnalyticsFeature';
import AiRecognitionFeature from './features/AiRecognitionFeature';

// Main wrapper
const FeaturesWrapper = styled.section`
  width: 100%;
  position: relative;
`;

const Features = () => {
  return (
    <FeaturesWrapper>
      <SmartSortingFeature />
      <PurchaseMemoryFeature />
      <AnalyticsFeature />
      <AiRecognitionFeature />
    </FeaturesWrapper>
  );
};

export default Features; 