import type { TermsAndPolicy } from "./types";

export const termsOfService: TermsAndPolicy[] = [
  {
    header: "1. Services Overview",
    content: `<strong class="strong-400">Wavetrace</strong> is an online platform where users can:`,
    isListNumerable: true,
    list: [
      {
        innerListItem: [
          `<strong class="strong-400">Purchase original music tracks and soundtracks.</strong>`,
          "Request edits to existing tracks (“Edit” option).",
          `Commission <strong class="strong-400">custom music tracks created from scratch</strong> for a specific project.`,
        ],
      },
    ],
    content2: "All transactions are processed securely via Stripe.",
  },
  {
    header: "2. Purchases of Music Tracks",
    list: [
      {
        innerListItem: [
          "Users may purchase tracks without creating an account.",
          "During purchase, users provide their email address and payment details via Stripe.",
          "After payment, the download link for the purchased track is sent to the email provided.",
          "If an incorrect email is submitted, users may contact our support to correct it.",
          "All sales are final, and no refunds are provided after the track has been delivered.",
          "Refunds are issued only if the track is not delivered due to an error on our part.",
        ],
      },
    ],
  },
  {
    header: "3. Editing Existing Tracks",
    list: [
      {
        innerListItem: [
          "Users may submit an edit request via the “Edit” option.",
          "The request must include a description of the desired changes and a valid email address.",
          "We will respond within 24 hours with a confirmation and a price offer.",
          `Not all tracks can be edited. Wavetrace will confirm whether the requested <strong class="strong-400">music can be edited</strong> before the client approves the offer.`,
          "Upon client approval, a deposit payment link is sent. Only after deposit payment do we start editing.",
          "Once the edited track is ready, a watermarked demo is sent to the client. After final approval and payment of the remaining balance, the client receives the full version without watermark.",
          "Wavetrace reserves the right to complete edits within the timeframe communicated in email correspondence.",
          "Refunds of deposits are only applicable if the track cannot be delivered due to our fault.",
        ],
      },
    ],
  },
  {
    header: `4. <strong class="strong-400">Custom Music</strong> Orders`,
    list: [
      {
        innerListItem: [
          `Users may submit a <strong class="strong-400">custom music request</strong> with details including project type, desired style, references, and inspirations.`,
          "We respond within 24 hours with a price offer.",
          "Upon client approval, a deposit payment link is sent.",
          "Work begins after deposit payment is received.",
          "A demo with watermark is sent upon completion. The client approves and pays the remaining balance before receiving the final track without watermark.",
          "Refunds are only provided if the track is not delivered due to an error on our side.",
          "After delivery of the full track and completion of payment, no refunds are provided.",
        ],
      },
    ],
  },
  {
    header: "5. Payment Processing",
    list: [
      {
        innerListItem: [
          "All payments are securely processed via Stripe.",
          "We do not store full payment information.",
          `Stripe’s privacy policy can be read here: <a href="https://stripe.com/privacy" class="tag-a-link" target="_blank">https://stripe.com/privacy</a>`,
        ],
      },
    ],
  },
  {
    header: "6. User Data & Privacy",
    list: [
      {
        innerListItem: [
          "We collect only the minimal personal data necessary to process orders, communicate with clients, and manage music requests (email, name, message content, and attachments).",
          "Data is securely stored and never shared with third parties.",
          "User data is used solely for the purposes of processing orders and providing services.",
        ],
      },
    ],
  },
  {
    header: "7. Intellectual Property",
    list: [
      {
        innerListItem: [
          `<strong class="strong-400">All music tracks available on Wavetrace</strong> remain the property of <strong class="strong-400">Wavetrace</strong> or the individual <strong class="strong-400">composer</strong>.`,
          `Purchasing a track grants the user a <strong class="strong-400">license to use it in personal or commercial projects</strong>, according to the license terms specified at the time of purchase.`,
          "Users may not resell, redistribute, or publicly share the purchased tracks.",
        ],
      },
    ],
  },
  {
    header: "8. Limitation of Liability",
    list: [
      {
        innerListItem: [
          `<strong class="strong-400">Wavetrace</strong> is not responsible for damages resulting from misuse of purchased tracks.`,
          "Refunds are provided only if tracks are not delivered due to Wavetrace’s error.",
          `<strong class="strong-400">Wavetrace</strong> is not liable for delays caused by circumstances outside our control.`,
        ],
      },
    ],
  },
  {
    header: "9. Contact Information",
    content:
      "For any questions regarding these Terms of Service, orders, or data handling, please contact our support.",
  },
  {
    header: "10. Company Information",
    content: `The online store <strong class="strong-400">Wavetrace.net</strong> is owned and operated by:
      <strong class="strong-400">Jakub Rezler</strong>, conducting business under the name <strong class="strong-400">Jakub Rezler Frontend Services</strong>,  
      registered in the Central Registration and Information on Business (CEIDG),  
      based in Wroclaw (Poland).
      <br />
      Tax Identification Number (NIP): 6922521331  
      <br />
      Business Statistical Number (REGON): 38372056500000`,
  },
];
