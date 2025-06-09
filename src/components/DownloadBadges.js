import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    ${props => props.hideOnMobile && 'display: none;'}
  }
`;

const BadgeLink = styled.a`
  display: inline-block;
`;

const DownloadBadges = ({ hideOnMobile = false }) => {
  return (
    <BadgesContainer hideOnMobile={hideOnMobile}>
      <BadgeLink href="https://apps.apple.com/app/id6737360577" target="_blank" rel="noopener noreferrer">
        <StaticImage src="../images/appstore_black.svg" alt="Download on the App Store" height={40} />
      </BadgeLink>
      <BadgeLink href="https://play.google.com/store/apps/details?id=com.vallesoftwarelabs.household" target="_blank" rel="noopener noreferrer">
        <StaticImage src="../images/googleplay.png" alt="Get it on Google Play" height={40} />
      </BadgeLink>
    </BadgesContainer>
  );
};

export default DownloadBadges; 