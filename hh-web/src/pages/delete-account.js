import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PolicyContainer from '../components/PolicyContainer'; // Import the shared container

const DeleteAccountPage = () => {
  return (
    <Layout>
      <PolicyContainer>
        <h1>Account Deletion</h1>

        <p>
          We understand you may wish to delete your YAGA account and associated data. This page explains how you can do this directly within the YAGA application.
        </p>

        <h2>How to Delete Your Account in the App</h2>
        <p>
          You can permanently delete your YAGA account and all associated personal data directly from the settings menu within the YAGA app. Please follow these steps:
        </p>
        <ul>
          <li><strong>Step 1:</strong> Open the YAGA app on your mobile device.</li>
          <li><strong>Step 2:</strong> Navigate to the "Menu" tab (found in the bottom navigation bar).</li>
          <li><strong>Step 3:</strong> On the Menu screen, tap on the "Account" option. This will take you to the Account Settings screen.</li>
          <li><strong>Step 4:</strong> On the Account Settings screen, scroll down to the "Danger Zone" section.</li>
          <li><strong>Step 5:</strong> Tap the "Delete Account" button.</li>
          <li><strong>Step 6:</strong> A confirmation dialog will appear asking you to confirm that you wish to permanently delete your account. Read the warning carefully.</li>
          <li><strong>Step 7:</strong> To proceed with deletion, tap the confirmation option.</li>
        </ul>

        <h2>What Happens When You Delete Your Account?</h2>
        <p>
          When you request to delete your account through the in-app process, the following actions occur:
        </p>
        <ul>
          <li><strong>Your Core Account is Deleted:</strong> Your personal user profile, including your name, email, and login credentials (via Firebase Authentication), will be permanently removed from our systems.</li>
          <li><strong>Direct Personal Data is Removed:</strong> This includes:
            <ul>
              <li>Your push notification tokens.</li>
              <li>Any app-specific configurations and settings linked directly to your user account.</li>
              <li>Records of invite codes you generated or were assigned to you.</li>
              <li>License grant information.</li>
            </ul>
          </li>
          <li><strong>Household Memberships & Shared Data:</strong>
            <ul>
              <li>Your membership in all households will be terminated.</li>
              <li><strong>If you are the last member of a household:</strong> That household and all its data (shared shopping lists, recipes, meal plans, receipts, stores added within that household, etc.) will be permanently deleted.</li>
              <li><strong>If other members remain in a household:</strong>
                <ul>
                  <li>Data you created within that shared household (e.g., specific shopping trips, receipts, recipes) will be reassigned to another active member of that household. This ensures the household can continue to function for the remaining members. Your personal link to this data is removed.</li>
                  <li>If you were the sole administrator of a household, another member will be promoted to admin status.</li>
                  <li>If your departure leaves a household with no members who have an active subscription, the household may be locked (access might be restricted until a subscription is active).</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Subscription Information:</strong> Your subscription status managed via RevenueCat will be handled according to their processes and our data retention policies. Note that deleting your app account does not automatically cancel active subscriptions through the app stores (Apple App Store or Google Play Store); you must manage these directly through the respective store platforms.</li>
        </ul>
        <p>
          Please be aware that account deletion is permanent and irreversible. Once your account is deleted, you will not be able to recover your data.
        </p>

        <h2>Need Help?</h2>
        <p>
          If you encounter any issues trying to delete your account through the app, or if you have questions about the process, please contact us at:
        </p>
        <p>
          contact@vallesoftwarelabs.com
        </p>

      </PolicyContainer>
    </Layout>
  );
};

export const Head = () => <Seo title="Account Deletion - YAGA" />;

export default DeleteAccountPage; 