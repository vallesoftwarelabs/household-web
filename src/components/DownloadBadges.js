import React from 'react';
import styled from 'styled-components';
import GooglePlayBadge from '../images/googleplay.png';
import AppStoreBadge from '../images/appstore_black.svg';

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
  img {
    height: 40px;
    width: auto;
    display: block;
  }
`;

const DownloadBadges = ({ hideOnMobile = false }) => {
  return (
    <BadgesContainer hideOnMobile={hideOnMobile}>
      <BadgeLink href="https://apps.apple.com/app/id6737360577" target="_blank" rel="noopener noreferrer">
        <img src={AppStoreBadge} alt="Download on the App Store" />
      </BadgeLink>
      <BadgeLink href="https://play.google.com/store/apps/details?id=com.vallesoftwarelabs.household" target="_blank" rel="noopener noreferrer">
        <img src={GooglePlayBadge} alt="Get it on Google Play" />
      </BadgeLink>
    </BadgesContainer>
  );
};

export default DownloadBadges; 