import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const BadgesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    align-items: flex-start;
    ${props => props.hideOnMobile && 'display: none;'}
  }
`;

const BadgesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const BadgeLink = styled.a`
  display: inline-block;
`;

const DownloadBadges = ({ hideOnMobile = false }) => {
  const handleBadgeClick = (event, storeName, url) => {
    event.preventDefault(); // Prevent the browser from navigating immediately

    const navigate = () => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    // If gtag isn't available, navigate immediately.
    if (typeof window.gtag !== 'function') {
      navigate();
      return;
    }
    
    // Use a callback to navigate after the GA event is sent.
    // Include a timeout as a fallback in case the callback doesn't fire.
    let callbackFired = false;
    const timeout = setTimeout(() => {
      if (!callbackFired) {
        callbackFired = true;
        navigate();
      }
    }, 500); // 0.5 second fallback

    window.gtag('event', 'select_content', {
      content_type: 'app_store_redirect',
      item_id: storeName,
      event_callback: () => {
        if (!callbackFired) {
          clearTimeout(timeout);
          callbackFired = true;
          navigate();
        }
      },
    });
  };
  
  const appStoreUrl = "https://apps.apple.com/app/id6737360577";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.vallesoftwarelabs.household";

  return (
    <BadgesContainer hideOnMobile={hideOnMobile}>
      <BadgesWrapper>
        <BadgeLink
          href={appStoreUrl}
          onClick={(e) => handleBadgeClick(e, 'app_store', appStoreUrl)}
        >
          <StaticImage src="../images/appstore_black.svg" alt="Download on the App Store" height={40} />
        </BadgeLink>
        <BadgeLink
          href={playStoreUrl}
          onClick={(e) => handleBadgeClick(e, 'play_store', playStoreUrl)}
        >
          <StaticImage src="../images/googleplay.png" alt="Get it on Google Play" height={40} />
        </BadgeLink>
      </BadgesWrapper>
    </BadgesContainer>
  );
};

export default DownloadBadges; 