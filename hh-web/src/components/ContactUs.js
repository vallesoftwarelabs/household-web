import React from 'react';
import styled from 'styled-components';
import PolicyContainer from './PolicyContainer';

const EmailLink = styled.a`
  font-weight: bold;
`;

const ContactUs = () => {
  return (
    <PolicyContainer>
      <h1>Contact Us</h1>
      <p>
        We're here to help! If you have any questions or need support, please feel free to reach out to us.
      </p>
      <div>
        <h2>Support</h2>
        <p>
          For any support-related inquiries, please email us at:{" "}
          <EmailLink href="mailto:contact@vallesoftwarelabs.com">
            contact@vallesoftwarelabs.com
          </EmailLink>
        </p>
        <p>
          We aim to respond to all inquiries within 24-48 business hours.
        </p>
      </div>
      {/* You can add a contact form or other contact methods here later if needed */}
    </PolicyContainer>
  );
};

export default ContactUs; 