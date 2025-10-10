export const sendOrderRequest = async (data: OrderFormData) => {
  const res = await fetch("http://localhost:5000/api/orders", {
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
