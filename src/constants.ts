export const errorKeys = ['customer_full_name', 'customer_phone', 'business_hour', 'services'];

export const validatePhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.slice(0, 3) !== "996") {
    return false;
  }
  return phoneNumber.length === 12;
};