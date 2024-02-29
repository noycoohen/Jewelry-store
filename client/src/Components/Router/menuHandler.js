import ROUTES from "./RouterModel";
import { RiShoppingBagLine } from "react-icons/ri";
import { PiSignInFill } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";
import { doSignOut } from "../../Services/users/users";
import { PiStorefrontThin } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";

const home = {
  to: ROUTES.HOME,
  label: "",
  icon: <AiFillHome size={20} color={"black"} title={"Home"} />,
};

const products = {
  to: ROUTES.PRODUCTS,
  label: "Jewerly",
  icon: <PiStorefrontThin size={25} color={"black"} title={"Cards"} />,
};
const about = {
  to: ROUTES.ABOUT,
  label: "About Us",
  icon: <MdOutlineContactSupport size={25} title={"About"} />,
};
const signIn = {
  to: ROUTES.SIGNIN,
  label: "Sign In",
  icon: <PiSignInFill size={25} color={"black"} title={"Sign In"} />,
};
const signOut = {
  to: ROUTES.HOME,
  label: "Sign Out",
  icon: <PiSignInFill size={25} color={"black"} title={"Sign Out"} />,
  onClickHandler: () => {
    doSignOut();
  },
};
const cart = {
  to: ROUTES.CART,
  label: "",
  icon: <RiShoppingBagLine size={25} color={"black"} title={"My Cards"} />,
};
const favProducts = {
  to: ROUTES.FAVPRODUCTS,
  label: "",
  icon: <IoIosHeartEmpty size={25} color={"black"} title={"Favorite Cards"} />,
};
const crm = {
  to: ROUTES.CRM,
  label: "CRM",
  icon: <GrUserAdmin size={25} color={"black"} title={"CRM"} />,
};

export const guestMenu = [home, cart, products, about, signIn];
export const simpleMenu = [home, cart, favProducts, products, about, signOut];
export const adminMenu = [
  home,
  cart,
  favProducts,
  products,
  about,
  signOut,
  crm,
];
