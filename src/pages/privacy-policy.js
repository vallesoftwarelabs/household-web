import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PolicyContainer from '../components/PolicyContainer'; // Import the shared container

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <PolicyContainer>
        <h1>Privacy Policy for YAGA - Yet Another Grocery App</h1>
        <p><strong>Effective Date: April 5, 2025</strong></p>

        <p>
          Welcome to the YAGA - Yet Another Grocery App (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
        </p>

        <p>
          We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Effective Date" of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:
        </p>
        <ul>
          <li><strong>Account Information:</strong> When you register or log in, we collect authentication identifiers provided by Firebase Authentication (e.g., Firebase User ID, email, name).</li>
          <li><strong>Household Data:</strong> Information linking you to specific households you join or create (e.g., <code>tenantid</code>, user roles like <code>isadmin</code>). Data you enter related to a household (like shopping lists or grocery items) is inherently shared with and accessible by other members of that same household.</li>
          <li><strong>Grocery and Shopping Data:</strong> Information you provide, including:
            <ul>
              <li>Grocery item details (names, quantities, units, categories).</li>
              <li>Shopping trip details (items, stores, dates).</li>
              <li>Receipt information.</li>
              <li>Store details.</li>
              <li>Tags you create and use.</li>
            </ul>
          </li>
          <li><strong>Location Data:</strong> We may request access or permission to track location-based information from your mobile device while you are using certain features of the Application to provide location-based services, such as discovering nearby stores and enabling features like custom grocery item sorting based on store layout. You can change our access or permissions in your device's settings.</li>
          <li><strong>Configuration and Preferences:</strong> Your app settings and preferences, such as notification permissions (<code>AllowNotifications</code>), selected store, synchronization timestamps, and other configurations.</li>
          <li><strong>Subscription Data:</strong> Information related to your subscription status, processed via RevenueCat. We link your subscription status to your user account.</li>
          <li><strong>Technical and Error Data:</strong> Diagnostic information to help us identify and fix problems with the App, collected via Bugsnag. This may include device identifiers and OS version.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Enable user-to-user communication and data sharing within households.</li>
          <li>Manage shopping lists, track purchases, and provide other core App features.</li>
          <li>Synchronize your data across your devices and with our backend services.</li>
          <li>Process payments and manage subscriptions (via RevenueCat).</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
          <li>Diagnose and resolve technical problems and errors (via Bugsnag).</li>
          <li>Send you notifications based on your preferences.</li>
          <li>Respond to your requests and support needs.</li>
        </ul>

        <h2>How We Share Your Information</h2>
        <p>
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul>
          <li><strong>Within Your Household:</strong> Any information you associate with a specific household will be visible to other members you invite or who are part of that household.</li>
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including authentication, data storage, synchronization, subscription management, and error monitoring. Our service providers include:
            <ul>
              <li>Firebase (Authentication)</li>
              <li>PowerSync (Data Storage and Synchronization)</li>
              <li>Microsoft Azure (Backend Data Processing and Storage)</li>
              <li>RevenueCat (Subscription Management)</li>
              <li>Bugsnag (Error Reporting)</li>
            </ul>
            These third parties are obligated to protect your data and use it only for the purposes for which it was disclosed.
          </li>
          <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>Aggregated Store Data:</strong> Information about grocery stores, such as their name, address, and location footprint (derived from user activity like shopping trips or location services), may be aggregated and made available to all users of the App to improve features like store discovery and location-based services. This store data is considered public within the App ecosystem and is not tied to specific households.</li>
          <li><strong>We do not sell your personal information to third parties.</strong></li>
        </ul>

        <h2>Data Storage, Security, and Retention</h2>
        <ul>
          <li><strong>Storage:</strong> Your data is stored locally on your device using PowerSync's offline cache and synchronized with cloud services (PowerSync and our backend infrastructure).</li>
          <li><strong>Security:</strong> We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</li>
          <li><strong>Retention:</strong> We will retain your personal information for as long as your account is active or as needed to provide you services and fulfill the purposes outlined in this policy. Data associated with a household may persist as long as the household is active. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. Technical logs are typically retained for a shorter, limited period.</li>
        </ul>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information. These may include the right to:
        </p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate personal information.</li>
          <li>Request deletion of your personal information, subject to certain exceptions.</li>
          <li>Manage your communication preferences (e.g., notification settings within the App).</li>
        </ul>
        <p>
          You can typically manage your household data and some preferences directly within the App. For requests related to accessing, correcting, or deleting your account information, please contact us using the information below.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          The Application is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under this age. If we learn that we have collected personal information from a child under this age, we will take steps to delete such information.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App or on our website and updating the "Effective Date" at the top. Your continued use of the App after any modification constitutes your acceptance of the new terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p>
          contact@vallesoftwarelabs.com
        </p>

      </PolicyContainer>
    </Layout>
  );
};

// Add SEO Head export
export const Head = () => <Seo title="YAGA" />;

export default PrivacyPolicyPage; 