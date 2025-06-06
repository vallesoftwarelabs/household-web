import React from 'react';
import { Link } from 'gatsby'; // Import Link for internal navigation
import Layout from '../components/layout';
import Seo from '../components/seo';
import PolicyContainer from '../components/PolicyContainer';

const TermsAndConditionsPage = () => {
  return (
    <Layout>
      <PolicyContainer>
        <h1>Terms and Conditions for YAGA - Yet Another Grocery App</h1>
        <p><strong>Effective Date: April 5, 2025</strong></p>

        <p>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the YAGA - Yet Another Grocery App mobile application (the "Service", "App", "Licensed Application") operated by Valle Software Labs AS ("us", "we", "our", "Developer").
        </p>
        <p>
          Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service (referred to herein as "End-User" or "you"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
        </p>
        <p>
          Your use of the App is also governed by our Privacy Policy, which can be found at <Link to="/privacy-policy">/privacy-policy</Link> and is incorporated herein by reference.
        </p>

        <h2>1. License to Use the App</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App strictly in accordance with these Terms for your personal, non-commercial use on a mobile device owned or otherwise controlled by you.
          (See also "Additional Terms Applicable to Users of the iOS Application" below for specific terms related to use on Apple-branded Products).
        </p>

        <h2>2. User Accounts</h2>
        <ul>
          <li><strong>Eligibility:</strong> You must be at least 13 years old (or such other age as required by applicable law for data processing consent) to create an account and use the Service.</li>
          <li><strong>Responsibility:</strong> You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
          <li><strong>Account Termination:</strong> We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</li>
        </ul>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to use the Service:</p>
        <ul>
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
          <li>To impersonate or attempt to impersonate us, our employees, another user, or any other person or entity.</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm us or users of the Service or expose them to liability.</li>
          <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
          <li>To upload or transmit viruses, Trojan horses, worms, time bombs, or other malicious or technologically harmful material.</li>
          <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
          <li>To reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the App, except as permitted by applicable law.</li>
        </ul>

        <h2>4. User-Generated Content</h2>
        <ul>
          <li><strong>Responsibility:</strong> You are solely responsible for the content (e.g., grocery lists, item details, receipt information, notes) that you create, upload, post, link, store, share and otherwise make available ("User Content") via the Service. You represent and warrant that you have all necessary rights to your User Content and that it does not violate any third-party rights or applicable laws.</li>
          <li><strong>License Grant:</strong> You retain all of your rights to any User Content you submit, post or display on or through the Service. By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free, sublicensable license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, store, sync, and distribute such User Content solely for the purpose of operating, developing, providing, and improving the Service and making that Content available to you and members of any household you are part of within the App.</li>
          <li><strong>Content Removal:</strong> We reserve the right, but not the obligation, to monitor and remove User Content that we determine in our sole discretion violates these Terms, is illegal, offensive, threatening, libelous, defamatory, obscene, or otherwise objectionable, or violates any party's intellectual property.</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of Valle Software Labs AS and its licensors. The Service is protected by copyright, trademark, and other laws of both Norway and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
        </p>

        <h2>6. Subscriptions and Payments</h2>
        <ul>
          <li><strong>Billing:</strong> Some parts of the Service may be billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription. Subscriptions are managed and processed through the application platform provider (e.g., Apple App Store, Google Play Store) or our third-party payment processor (e.g., Stripe) via RevenueCat.</li>
          <li><strong>Auto-Renewal:</strong> At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or we cancel it.</li>
          <li><strong>Cancellation:</strong> You may cancel your Subscription renewal through your account management page on the application platform provider (e.g., App Store or Google Play Store) or as otherwise specified by the platform.</li>
          <li><strong>Fees:</strong> We reserve the right to modify the Subscription fees at any time. Any Subscription fee change will become effective at the end of the then-current Billing Cycle. We will provide you with reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.</li>
          <li><strong>Refunds:</strong> Except when required by law or the policies of the application platform provider (see "Additional Terms Applicable to Users of the iOS Application" for specific provisions related to Apple), paid Subscription fees are generally non-refundable.</li>
        </ul>

        <h2>7. Third-Party Services</h2>
        <p>
          Our Service relies on or may integrate with third-party services not operated by us (including, but not limited to, Firebase Authentication, PowerSync, RevenueCat, Bugsnag, Microsoft Azure, and potentially mapping services). We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites. You acknowledge and agree that you must comply with applicable third-party terms of agreement when using our Application. For example, if the App utilizes data services, you must not be in violation of your wireless data service agreement when using the App.
        </p>

        <h2>8. Location-Based Services</h2>
        <p>
          Certain features of the App may utilize location data from your mobile device to provide functionality such as identifying nearby stores or enabling custom sorting within stores. We do not guarantee the accuracy, availability, or reliability of this location data. Your use of these features is at your own risk. You can enable or disable location services when you use our Service at any time, through your device settings.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. USE OF THE SERVICE IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, OR NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE AND OUR LICENSORS DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; THAT THE SERVICE WILL MEET YOUR REQUIREMENTS; THAT THE SERVICE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          (See also "Additional Terms Applicable to Users of the iOS Application" for specific warranty provisions related to Apple).
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL VALLE SOFTWARE LABS AS, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US FOR THE SERVICE DURING THE TERM OF MEMBERSHIP. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THE ABOVE EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to defend, indemnify and hold harmless Valle Software Labs AS and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) User Content posted on the Service.
        </p>

        <h2>12. Termination</h2>
        <p>
          We may terminate or suspend your license and access to the Service immediately, without prior notice or liability, if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may cancel your subscription through your platform provider (e.g., Apple App Store or Google Play Store) and contact us at contact@vallesoftwarelabs.com to request deletion of your data, subject to our Privacy Policy. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of Norway, without regard to its conflict of law provisions.
        </p>

        <h2>14. Dispute Resolution</h2>
        <p>
          Any dispute arising from the Terms or your use of the Service will be resolved through binding arbitration conducted in Bodø, Norway, except for disputes that qualify for small claims court. You agree to waive your right to participate in class action lawsuits or class-wide arbitration. The arbitration will be conducted in accordance with the Norwegian Arbitration Act (Lov om voldgift).
        </p>

        <h2>15. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect, potentially via an in-app notification or by updating the "Effective Date" at the top of these Terms. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2>16. Contact Us</h2>
        <p>If you have any questions, complaints, or claims with respect to these Terms or the Licensed Application, please contact us:</p>
        <ul>
          <li>Valle Software Labs AS</li>
          <li>Fredensborgveien 87A, 8003 BODØ, NORWAY</li>
          <li>Email: contact@vallesoftwarelabs.com</li>
        </ul>

        <h2>Additional Terms Applicable to Users of the iOS Application (Licensed Application obtained through the Apple App Store)</h2>
        <p>If you have downloaded the Licensed Application from the Apple Inc. ("Apple") App Store, the following additional terms and conditions apply:</p>

        <h3>1. Acknowledgement:</h3>
        <p>
          You and Valle Software Labs AS acknowledge that these Terms are concluded between Valle Software Labs AS and you (the End-User) only, and not with Apple. Valle Software Labs AS, not Apple, is solely responsible for the Licensed Application and the content thereof. These Terms may not provide for usage rules for the Licensed Application that are in conflict with the Apple Media Services Terms and Conditions (which you acknowledge you have had the opportunity to review) as of the Effective Date of these Terms.
        </p>

        <h3>2. Scope of License:</h3>
        <p>
          The license granted to you for the Licensed Application in Section 1 of these Terms is further limited to a non-transferable license to use the Licensed Application on any Apple-branded Products that you own or control and as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions. Notwithstanding the foregoing, such Licensed Application may be accessed and used by other accounts associated with the purchaser via Family Sharing or volume purchasing, if and to the extent permitted by such Apple Media Services Terms and Conditions.
        </p>

        <h3>3. Maintenance and Support:</h3>
        <p>
          Valle Software Labs AS is solely responsible for providing any maintenance and support services with respect to the Licensed Application, as specified in these Terms (if any), or as required under applicable law. You and Valle Software Labs AS acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application.
        </p>

        <h3>4. Warranty:</h3>
        <p>
          Valle Software Labs AS is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed in Section 9 of these Terms. In the event of any failure of the Licensed Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the Licensed Application to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other claims, losses, liabilities, damages, costs, or expenses attributable to any failure to conform to any warranty will be Valle Software Labs AS's sole responsibility.
        </p>

        <h3>5. Product Claims:</h3>
        <p>
          You and Valle Software Labs AS acknowledge that Valle Software Labs AS, not Apple, is responsible for addressing any claims by you or any third party relating to the Licensed Application or your possession and/or use of that Licensed Application, including, but not limited to: (i) product liability claims; (ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation, including in connection with the Licensed Application's use of HealthKit and HomeKit frameworks (if applicable). These Terms do not limit Valle Software Labs AS's liability to you beyond what is permitted by applicable law.
        </p>

        <h3>6. Intellectual Property Rights:</h3>
        <p>
          You and Valle Software Labs AS acknowledge that, in the event of any third-party claim that the Licensed Application or your possession and use of that Licensed Application infringes that third party's intellectual property rights, Valle Software Labs AS, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such intellectual property infringement claim.
        </p>

        <h3>7. Legal Compliance:</h3>
        <p>
          You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.
        </p>

        <h3>8. Developer Name and Address:</h3>
        <p>
          Valle Software Labs AS's name, address, and contact information for any End-User questions, complaints, or claims with respect to the Licensed Application are set forth in Section 16 ("Contact Us") of these Terms.
        </p>

        <h3>9. Third Party Terms of Agreement:</h3>
        <p>
          You must comply with applicable third-party terms of agreement when using the Licensed Application. This includes, for example, your wireless data service agreement. This is also referenced in Section 7 ("Third-Party Services") of these Terms.
        </p>

        <h3>10. Third Party Beneficiary:</h3>
        <p>
          You and Valle Software Labs AS acknowledge and agree that Apple, and Apple's subsidiaries, are third-party beneficiaries of these Terms (specifically this section applicable to iOS Applications), and that, upon your acceptance of the terms and conditions of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms (specifically this section applicable to iOS Applications) against you as a third-party beneficiary thereof.
        </p>

      </PolicyContainer>
    </Layout>
  );
};

// Add SEO Head export
export const Head = () => <Seo title="YAGA" />;

export default TermsAndConditionsPage; 