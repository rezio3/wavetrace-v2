import { baseUrl } from "../../assets/baseUrl";

export const sendOrderRequest = async (data: OrderFormData) => {
  const res = await fetch(`${baseUrl}api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to send order");
  return res.json();
};

export type OrderFormData = {
  email: string;
  message: string;
};
