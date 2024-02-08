export const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const passwordPattern =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const phonePattern = /^([0]\d{1,3}[-])?\d{7,10}$/;

export const patterns = {
  email: emailPattern,
  password: passwordPattern,
  phone: phonePattern,
};
