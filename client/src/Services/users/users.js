import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export const getUserInfo = (token) => {
  token ??= localStorage.getItem("token");
  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch {}
  return decoded;
};

export const getUserType = (token) => {
  const decoded = getUserInfo(token);
  if (!decoded) {
    return "guest";
  }
  if (decoded.isAdmin) {
    return "admin";
  }
  return "regular";
};

export const doSignOut = () => {
  localStorage.removeItem("token");
  toast.success("You logged out");

  setTimeout(() => {
    window.location.reload();
  }, 2000);
};
