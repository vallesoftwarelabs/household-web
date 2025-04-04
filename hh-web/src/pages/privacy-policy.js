import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

// Simple container to add some padding around the content
const PolicyContainer = styled.div`
  padding: 2rem 3rem; // Match general section padding
  max-width: 900px; // Limit content width for readability
  margin: 2rem auto; // Center the container
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #444;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
    list-style: disc;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <PolicyContainer>
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated: [Insert Date]</strong></p>

        <p>
          Welcome to [Your App Name/Website Name] ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy, or our practices with regards to your personal information, please contact us at [Your Contact Email/Info].
        </p>

        <p>
          This privacy policy applies to all information collected through our website ([Your Website URL]), mobile application ([App Name]), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the "Services").
        </p>

        <p>
          <strong>Please read this privacy policy carefully</strong> as it will help you make informed decisions about sharing your personal information with us.
        </p>

        <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p>
          [Placeholder: Detail the types of personal information you collect, e.g., name, email, address, payment info, usage data, device information, location data.]
        </p>
        <ul>
          <li>Information you provide to us (e.g., account registration, orders)</li>
          <li>Information automatically collected (e.g., cookies, log files, usage analytics)</li>
          {/* Add more specific points as needed */}
        </ul>

        <h2>2. HOW DO WE USE YOUR INFORMATION?</h2>
        <p>
          [Placeholder: Explain the purposes for which you use the collected information, e.g., providing services, processing payments, communication, personalization, marketing, analytics, security.]
        </p>

        <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
        <p>
          [Placeholder: Describe if and how you share information with third parties, e.g., payment processors, delivery partners, analytics providers, marketing partners. Mention compliance with law, business transfers, etc.]
        </p>

        <h2>4. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p>
          [Placeholder: Describe the security measures you have in place to protect user data.]
        </p>

        <h2>5. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>
          [Placeholder: Explain user rights, such as access, correction, deletion, objection, data portability, and how users can exercise these rights. Mention regional rights like GDPR or CCPA if applicable.]
        </p>

        <h2>6. UPDATES TO THIS POLICY</h2>
        <p>
          [Placeholder: State that the policy may be updated and how users will be notified.]
        </p>

        <h2>7. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
        <p>
          [Placeholder: Provide clear contact information for privacy-related inquiries.]
        </p>

      </PolicyContainer>
    </Layout>
  );
};

// Add SEO Head export
export const Head = () => <Seo title="Privacy Policy" />;

export default PrivacyPolicyPage; 