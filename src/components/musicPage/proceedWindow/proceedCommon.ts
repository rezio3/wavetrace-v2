import { baseUrl } from "../../../assets/baseUrl";
import type { Nil } from "../../../assets/types";
import type { MusicItem } from "../musicPageCommon";

export const handleCheckout = async ({
  track,
  email,
  buyOrEdit,
  editDescription,
}: {
  track: MusicItem;
  email: string;
  buyOrEdit: "buy" | "edit";
  editDescription: string | Nil;
}) => {
  const response =
    buyOrEdit === "buy"
      ? await fetch(`${baseUrl}api/stripe/checkout-session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: track._id, email }),
        })
      : await fetch(`${baseUrl}api/edit-request`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            message: `${track.title} by ${track.artist} - ${editDescription}`,
          }),
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

export type BuyOrEditFormData = {
  email: string;
  isAcceptedTermsAndPolicy: boolean;
  message?: string;
};
