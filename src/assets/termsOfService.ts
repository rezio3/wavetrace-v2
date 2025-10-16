import type { TermsAndPolicy } from "./types";

export const termsOfService: TermsAndPolicy[] = [
  {
    header: "1. Services Overview",
    content: `Wavetrace is an online platform where users can:`,
    isListNumerable: true,
    list: [
      {
        innerListItem: [
          "Purchase original music tracks and soundtracks.",
          "Request edits to existing tracks (“Edit” option).",
          "Commission custom music tracks created from scratch for a specific project.",
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
          "Not all tracks can be edited. Wavetrace will confirm whether the requested track can be edited before the client approves the offer.",
          "Upon client approval, a deposit payment link is sent. Only after deposit payment do we start editing.",
          "Once the edited track is ready, a watermarked demo is sent to the client. After final approval and payment of the remaining balance, the client receives the full version without watermark.",
          "Wavetrace reserves the right to complete edits within the timeframe communicated in email correspondence.",
          "Refunds of deposits are only applicable if the track cannot be delivered due to our fault.",
        ],
      },
    ],
  },
  {
    header: "4. Custom Music Orders",
    list: [
      {
        innerListItem: [
          "Users may submit a custom music request with details including project type, desired style, references, and inspirations.",
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
          "Stripe’s privacy policy can be read here: https://stripe.com/privacy",
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
          "All music tracks available on Wavetrace remain the property of Wavetrace or the individual composer.",
          "Purchasing a track grants the user a license to use it in personal or commercial projects, according to the license terms specified at the time of purchase.",
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
          "Wavetrace is not responsible for damages resulting from misuse of purchased tracks.",
          "Refunds are provided only if tracks are not delivered due to Wavetrace’s error.",
          "Wavetrace is not liable for delays caused by circumstances outside our control.",
        ],
      },
    ],
  },
  {
    header: "9. Contact Information",
    content:
      "For any questions regarding these Terms of Service, orders, or data handling, please contact our support.",
  },
];
