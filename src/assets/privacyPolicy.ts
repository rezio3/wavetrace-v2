import type { TermsAndPolicy } from "./types";

export const privacyPolicy: TermsAndPolicy[] = [
  {
    header: "1. Who We Are",
    content: ` Wavetrace is an online store that sells original music tracks and
        soundtracks created by independent composers. We also offer custom music
        composition services and accept collaboration submissions from
        composers. All personal data collected through this website is
        controlled by Wavetrace (referred to as “we”, “our”, or “us” throughout
        this document).`,
  },
  {
    header: "2. Information We Collect",
    content: `We collect and process only the information necessary to operate our services:`,
    list: [
      {
        innerListHeader: "When purchasing a track:",
        innerListItem: [
          "Email address",
          "Payment information (handled securely by Stripe)",
        ],
      },
      {
        innerListHeader: "When placing a custom order:",
        innerListItem: [
          "Email address",
          "Message content (details about your project or music request)",
        ],
      },
      {
        innerListHeader: "When submitting a collaboration request:",
        innerListItem: [
          "Name and surname",
          "Email address",
          "Message content (optional)",
          "Portfolio or file attachments",
        ],
      },
    ],
    content2:
      "We do not collect or store any sensitive information beyond what is required to process your request or payment.",
  },
  {
    header: "3. How We Use Your Information",
    content: `We use your information solely to:`,
    list: [
      {
        innerListItem: [
          "Process and deliver your purchased music",
          "Send download links and order confirmations via email",
          "Communicate regarding custom music orders",
          "Review and respond to collaboration submissions",
        ],
      },
    ],
    content2: `We do not share, sell, or rent your data to any third parties. 
    Your personal information is used strictly for the purpose it was provided for.`,
  },
  {
    header: "4. Payment Processing",
    content: `All payments on Wavetrace are securely processed by Stripe. 
    When making a purchase, your card details and other payment information 
    are collected directly by Stripe — we do not store or have access to your 
    full payment data. 
    You can read Stripe’s privacy policy here: https://stripe.com/privacy`,
  },
  {
    header: "5. Data Storage and Security",
    content: `We store only the minimal data necessary (such as your email and message) for record-keeping and order fulfillment. 
    We implement reasonable technical and organizational measures to protect your data against unauthorized access, loss, or misuse.`,
  },
  {
    header: "6. Cookies and Tracking",
    content: `Wavetrace does not use tracking cookies or any analytics tools that monitor user behavior. 
    You can browse and make purchases on our website without creating an account or being tracked.`,
  },
  {
    header: "7. Your Rights",
    content: `You have the right to:`,
    list: [
      {
        innerListItem: [
          "Request access to the personal data we hold about you",
          "Request correction or deletion of your data",
          "Withdraw consent for processing (where applicable)",
        ],
      },
    ],
    content2:
      "To exercise any of these rights, please contact us at: wavetrace.music@gmail.com",
  },
  {
    header: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. 
    Any updates will be posted on this page with an updated “Effective date”.`,
  },
];
