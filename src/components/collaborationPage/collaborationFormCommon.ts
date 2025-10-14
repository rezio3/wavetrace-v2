import { baseUrl } from "../../assets/baseUrl";

export const sendCollaborationRequest = async (data: CollaborationFormData) => {
  const res = await fetch(`${baseUrl}api/collaboration`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to send order");
  return res.json();
};

export type CollaborationFormData = {
  name: string;
  email: string;
  message: string;
  portfolioLink: string;
};
