import React from 'react';
import styled from 'styled-components';

const OffersWrapper = styled.section`
  padding: 4rem 3rem;
  background-color: #fff; // White background
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
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const OffersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const OfferCard = styled.div`
  position: relative; // Needed for positioning the discount badge
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  border-radius: 8px;
  overflow: hidden; // Hide overflowing parts of the image/badge
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const DiscountBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #000; // Black badge
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
`;

// Placeholder image URLs (replace with actual image paths/URLs)
const offerImage1 = "/images/offer-produce.jpg"; // Example path
const offerImage2 = "/images/offer-dairy.jpg";
const offerImage3 = "/images/offer-meat.jpg";

const SpecialOffers = () => {
  return (
    <OffersWrapper>
      <SectionTitle>Special Offers</SectionTitle>
      <OffersContainer>
        <OfferCard>
          {/* Placeholder - requires images in /static/images or similar */}
          <img src={offerImage1} alt="Fresh Produce Offer" />
          <DiscountBadge>Save 20%</DiscountBadge>
        </OfferCard>
        <OfferCard>
          <img src={offerImage2} alt="Dairy Offer" />
          <DiscountBadge>Save 15%</DiscountBadge>
        </OfferCard>
        <OfferCard>
          <img src={offerImage3} alt="Meat Offer" />
          <DiscountBadge>Save 25%</DiscountBadge>
        </OfferCard>
      </OffersContainer>
    </OffersWrapper>
  );
};

export default SpecialOffers; 