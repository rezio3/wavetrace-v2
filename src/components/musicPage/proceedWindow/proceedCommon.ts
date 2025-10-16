import { baseUrl } from "../../../assets/baseUrl";

export const handleCheckout = async ({
  id,
  email,
}: {
  id: string;
  email: string;
}) => {
  const response = await fetch(`${baseUrl}api/stripe/checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, email }),
  });

  if (!response.ok) {
    throw new Error("Błąd podczas tworzenia sesji płatności");
  }

  const data = await response.json();

  if (data.url) {
    window.location.href = data.url;
  }

  return data;
};

export type BuyFormData = {
  email: string;
  isAcceptedTermsAndPolicy: boolean;
};
