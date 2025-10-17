export const validateEmail = (email: string): boolean => {
  // prosty regex walidujący większość poprawnych adresów email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
