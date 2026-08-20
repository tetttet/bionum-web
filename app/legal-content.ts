export type LegalPlatform = "ios" | "android";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  platformTitle: string;
  effectiveDate?: string;
  sections: LegalSection[];
};

export type LegalDocumentSet = Record<LegalPlatform, LegalDocument>;

export const termsOfUseContent: LegalDocumentSet = {
  ios: {
    platformTitle: "BioNum for iOS",
    sections: [
      {
        title: "1. General Provisions",
        paragraphs: [
          "These Terms of Use govern access to and use of the BioNum mobile application available through the App Store.",
          "By using the App, you confirm that you have read these Terms and agree to comply with them.",
        ],
      },
      {
        title: "2. Nature of the Services",
        paragraphs: [
          "BioNum provides numerological interpretations, calculations, and content based on symbolic and esoteric approaches.",
          "All information in the App:",
        ],
        bullets: [
          "is intended solely for entertainment and informational purposes",
          "is not scientifically validated",
          "is not an accurate forecast or prediction",
          "does not guarantee any results or events",
        ],
      },
      {
        title: "3. Professional Advice Disclaimer",
        paragraphs: [
          "The content of the App does not constitute:",
          "You should not make decisions based solely on information from the App.",
        ],
        bullets: [
          "medical advice",
          "psychological counseling",
          "financial or investment advice",
          "legal advice",
        ],
      },
      {
        title: "4. Subscriptions and Payments (Apple In-App Purchases)",
        paragraphs: [
          "Some features of the App are available by subscription through Apple In-App Purchases.",
        ],
        bullets: [
          "Payment is charged to your Apple ID when the purchase is confirmed",
          "The subscription renews automatically unless canceled at least 24 hours before the end of the current period",
          "You can manage your subscription in your Apple ID settings",
          "Refunds are subject to Apple's policies",
        ],
      },
      {
        title: "5. User Responsibility",
        paragraphs: [
          "Users make all decisions independently and bear full responsibility for them.",
          "BioNum is not responsible for:",
        ],
        bullets: [
          "user actions",
          "the consequences of decisions made",
          "any direct or indirect losses",
        ],
      },
      {
        title: "6. No Warranties",
        paragraphs: [
          'The App is provided on an "as is" basis.',
          "BioNum does not guarantee:",
        ],
        bullets: [
          "the accuracy of the information",
          "the achievement of specific results",
          "that the App will fully meet user expectations",
        ],
      },
      {
        title: "7. Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by applicable law, BioNum is not liable for any indirect, incidental, special, punitive, or consequential damages, including, without limitation, lost profits, loss of data, reputational harm, or other intangible losses arising from the use of or inability to use the App.",
          "BioNum's total aggregate liability for any claims related to the use of the App is limited to the amount actually paid by the user during the 12 (twelve) months preceding the event giving rise to the claim and, in all cases, will not exceed USD 100 (one hundred), or its equivalent in local currency.",
        ],
      },
      {
        title: "8. Changes to the Service",
        paragraphs: [
          "BioNum may modify features or content, or suspend operation of the App, without prior notice.",
        ],
      },
      {
        title: "9. Intellectual Property",
        paragraphs: [
          "All materials, text, calculations, images, and other elements of the App belong to BioNum and are protected by applicable law.",
        ],
      },
      {
        title: "10. Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of the country in which the owner of the App is registered, unless otherwise required by mandatory provisions of applicable law.",
        ],
      },
      {
        title: "11. Contact Us",
        paragraphs: ["Email: Bionumknyaz@gmail.com"],
      },
    ],
  },
  android: {
    platformTitle: "BioNum for Android",
    sections: [
      {
        title: "1. General Provisions",
        paragraphs: [
          "These Terms of Use govern access to and use of the BioNum mobile application available through Google Play.",
          "By using the App, you confirm that you have read these Terms and agree to comply with them.",
        ],
      },
      {
        title: "2. Nature of the Services",
        paragraphs: [
          "BioNum provides numerological interpretations, calculations, and content of an esoteric nature.",
          "All information in the App:",
        ],
        bullets: [
          "is intended for entertainment and informational purposes",
          "is not scientifically validated",
          "is not an accurate forecast or prediction",
          "does not guarantee any results or events",
        ],
      },
      {
        title: "3. Professional Advice Disclaimer",
        paragraphs: [
          "The App does not provide professional services and is not a substitute for consulting a qualified professional.",
          "BioNum does not provide:",
          "Users make decisions independently and at their own risk.",
        ],
        bullets: [
          "medical services",
          "psychological counseling",
          "financial or investment advice",
          "legal advice",
        ],
      },
      {
        title: "4. Subscriptions and Payments (Google Play Billing)",
        paragraphs: [
          "Some features of the App are available by subscription through Google Play Billing.",
        ],
        bullets: [
          "Payment is processed through your Google Play account",
          "The subscription renews automatically unless canceled in advance",
          "You can manage your subscription through your Google account",
          "Refunds are subject to Google Play's policies",
        ],
      },
      {
        title: "5. User Responsibility",
        paragraphs: [
          "Users make all decisions independently and bear full responsibility for them.",
          "BioNum is not responsible for:",
        ],
        bullets: [
          "user actions",
          "the consequences of decisions made",
          "any direct or indirect losses",
        ],
      },
      {
        title: "6. No Warranties",
        paragraphs: [
          'The App is provided on an "as is" basis.',
          "BioNum does not guarantee:",
        ],
        bullets: [
          "the accuracy of the information",
          "the achievement of specific results",
          "that the App will fully meet user expectations",
        ],
      },
      {
        title: "7. Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by applicable law, BioNum is not liable for any indirect, incidental, special, punitive, or consequential damages, including, without limitation, lost profits, loss of data, reputational harm, or other intangible losses arising from the use of or inability to use the App.",
          "BioNum's total aggregate liability for any claims related to the use of the App is limited to the amount actually paid by the user during the 12 (twelve) months preceding the event giving rise to the claim and, in all cases, will not exceed USD 100 (one hundred), or its equivalent in local currency.",
        ],
      },
      {
        title: "8. Changes to the Service",
        paragraphs: [
          "BioNum may modify features or content, or suspend operation of the App, without prior notice.",
        ],
      },
      {
        title: "9. Intellectual Property",
        paragraphs: [
          "All materials, text, calculations, images, and other elements of the App belong to BioNum and are protected by applicable law.",
        ],
      },
      {
        title: "10. Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of the country in which the owner of the App is registered, unless otherwise required by mandatory provisions of applicable law.",
        ],
      },
      {
        title: "11. Contact Us",
        paragraphs: ["Email: Bionumknyaz@gmail.com"],
      },
    ],
  },
};

export const privacyPolicyContent: LegalDocumentSet = {
  ios: {
    platformTitle: "BioNum for iOS",
    effectiveDate: "Effective date: April 19, 2026",
    sections: [
      {
        title: "1. General Provisions",
        paragraphs: [
          "This Privacy Policy describes how the BioNum app for iOS collects, uses, and protects user information.",
          "By using the App, you agree to the terms of this Policy.",
        ],
      },
      {
        title: "2. Personal Data",
        paragraphs: [
          "We may collect information that you provide voluntarily:",
        ],
        bullets: [
          "name",
          "date of birth",
          "email address provided when registering or contacting us",
        ],
      },
      {
        title: "3. Technical and Analytics Data",
        paragraphs: [
          "We may automatically collect anonymized technical and analytics data about the operation of the App, including:",
        ],
        bullets: [
          "device type",
          "operating system version",
          "device language",
          "actions taken within the App",
          "feature usage data",
        ],
      },
      {
        title: "4. Payment Data",
        paragraphs: [
          "We do not collect or store bank card details or other user payment information.",
          "All payments and subscriptions for the iOS version are processed through the Apple App Store in accordance with Apple's policies.",
        ],
      },
      {
        title: "5. How We Use Data",
        paragraphs: ["The information we collect may be used to:"],
        bullets: [
          "provide the App's features",
          "personalize numerological calculations",
          "improve the operation of the App",
          "analyze feature usage",
          "contact users when necessary",
        ],
      },
      {
        title: "6. Data Storage and Security",
        paragraphs: [
          "We take reasonable organizational and technical measures to protect user data against unauthorized access, loss, alteration, or disclosure.",
          "However, no method of storing or transmitting data over the internet can guarantee absolute security.",
        ],
      },
      {
        title: "7. Sharing Data with Third Parties",
        paragraphs: [
          "We do not sell users' personal data or share it with third parties except when necessary:",
        ],
        bullets: [
          "to comply with legal requirements",
          "to operate analytics services and technical infrastructure",
          "to ensure the App functions properly and to support users",
        ],
      },
      {
        title: "8. Analytics and Cookies",
        paragraphs: [
          "The App may use analytics tools to track user activity and improve the user experience.",
          "If third-party SDKs or services use similar identification technologies, those technologies are used only to the extent necessary for analytics and product operation.",
        ],
      },
      {
        title: "9. Children",
        paragraphs: [
          "The App is not intended for anyone under the age of 13, and we do not knowingly collect personal data from children.",
        ],
      },
      {
        title: "10. User Rights",
        paragraphs: [
          "You may contact us to request access to, correction of, or deletion of your data, or to withdraw your consent to its processing, to the extent permitted by applicable law.",
        ],
      },
      {
        title: "11. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy. The updated version takes effect when it is published in the App or on the relevant page.",
        ],
      },
      {
        title: "12. Contact Us",
        paragraphs: [
          "For privacy inquiries: Bionumknyaz@gmail.com",
        ],
      },
    ],
  },
  android: {
    platformTitle: "BioNum for Android",
    effectiveDate: "Effective date: April 19, 2026",
    sections: [
      {
        title: "1. General Provisions",
        paragraphs: [
          "This Privacy Policy describes how the BioNum app for Android collects, uses, and protects user information.",
          "By using the App, you agree to the terms of this Policy.",
        ],
      },
      {
        title: "2. Personal Data",
        paragraphs: [
          "We may collect information that you provide voluntarily:",
        ],
        bullets: [
          "name",
          "date of birth",
          "email address provided when registering or contacting us",
        ],
      },
      {
        title: "3. Technical and Analytics Data",
        paragraphs: [
          "We may automatically collect anonymized technical and analytics data about the operation of the App, including:",
        ],
        bullets: [
          "device type",
          "operating system version",
          "device language",
          "actions taken within the App",
          "feature usage data",
        ],
      },
      {
        title: "4. Payment Data",
        paragraphs: [
          "We do not collect or store bank card details or other user payment information.",
          "All payments and subscriptions for the Android version are processed through Google Play in accordance with Google's policies.",
        ],
      },
      {
        title: "5. How We Use Data",
        paragraphs: ["The information we collect may be used to:"],
        bullets: [
          "provide the App's features",
          "personalize numerological calculations",
          "improve the operation of the App",
          "analyze feature usage",
          "contact users when necessary",
        ],
      },
      {
        title: "6. Data Storage and Security",
        paragraphs: [
          "We take reasonable organizational and technical measures to protect user data against unauthorized access, loss, alteration, or disclosure.",
          "However, no method of storing or transmitting data over the internet can guarantee absolute security.",
        ],
      },
      {
        title: "7. Sharing Data with Third Parties",
        paragraphs: [
          "We do not sell users' personal data or share it with third parties except when necessary:",
        ],
        bullets: [
          "to comply with legal requirements",
          "to operate analytics services and technical infrastructure",
          "to ensure the App functions properly and to support users",
        ],
      },
      {
        title: "8. Analytics and Cookies",
        paragraphs: [
          "The App may use analytics tools to track user activity and improve the user experience.",
          "If third-party SDKs or services use similar identification technologies, those technologies are used only to the extent necessary for analytics and product operation.",
        ],
      },
      {
        title: "9. Children",
        paragraphs: [
          "The App is not intended for anyone under the age of 13, and we do not knowingly collect personal data from children.",
        ],
      },
      {
        title: "10. User Rights",
        paragraphs: [
          "You may contact us to request access to, correction of, or deletion of your data, or to withdraw your consent to its processing, to the extent permitted by applicable law.",
        ],
      },
      {
        title: "11. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy. The updated version takes effect when it is published in the App or on the relevant page.",
        ],
      },
      {
        title: "12. Contact Us",
        paragraphs: [
          "For privacy inquiries: Bionumknyaz@gmail.com",
        ],
      },
    ],
  },
};
