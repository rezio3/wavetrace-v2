import { baseUrl } from "../../assets/baseUrl";

export const sendMessage = async (data: ContactFormData) => {
  const res = await fetch(`${baseUrl}api/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
};

export type ContactFormData = {
  email: string;
  message: string;
};

export const orderTips = [
  {
    tip: `Describe the exact <strong class="strong-200">type of music you need.</strong>`,
  },
  {
    tip: `Specify the theme or purpose of your project that requires <strong class="strong-200">music</strong>.`,
  },
  {
    tip: `You can outline specific time intervals where certain <strong class="strong-200">sounds or instruments</strong> should play (e.g., in a <strong class="strong-200">film</strong> or <strong class="strong-200">stage performance</strong>).`,
  },
  {
    tip: "Attach examples or inspirations as links (e.g., YouTube or SoundCloud) if you have any.",
  },
  {
    tip: "The more details you provide, the better we can match your expectations.",
  },
];
