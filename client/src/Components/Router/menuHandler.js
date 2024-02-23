import ROUTES from "./RouterModel";
import { FcAbout } from "react-icons/fc";
import { RiShoppingBagLine } from "react-icons/ri";
import { PiSignInFill } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { PiCardsBold } from "react-icons/pi";
import { MdOutlineFavorite } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { doSignOut } from "../../Services/users/users";

const home = {
  to: ROUTES.HOME,
  label: "Home",
  icon: <AiFillHome size={20} color={"white"} title={"Home"} />,
};

const products = {
  to: ROUTES.PRODUCTS,
  label: "Jewerly",
  icon: <PiCardsBold size={25} color={"white"} title={"Cards"} />,
};
const about = {
  to: ROUTES.ABOUT,
  label: "About Us",
  icon: <FcAbout size={25} title={"About"} />,
};
// const registration = {
//   to: ROUTES.REGISTRATION,
//   label: "Registration",
//   icon: <BiSolidRegistered size={25} color={"white"} title={"Registration"} />,
// };
const signIn = {
  to: ROUTES.SIGNIN,
  label: "Sign In",
  icon: <PiSignInFill size={25} color={"white"} title={"Sign In"} />,
};
const signOut = {
  to: ROUTES.HOME,
  label: "Sign Out",
  icon: <PiSignInFill size={25} color={"white"} title={"Sign Out"} />,
  onClickHandler: () => {
    doSignOut();
  },
};
const cart = {
  to: ROUTES.CART,
  label: "Cart",
  icon: <RiShoppingBagLine size={25} color={"white"} title={"My Cards"} />,
};
const favProducts = {
  to: ROUTES.FAVPRODUCTS,
  label: "Favorite Products",
  icon: (
    <MdOutlineFavorite size={25} color={"white"} title={"Favorite Cards"} />
  ),
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
  products,
  cart,
  favProducts,
  about,
  signOut,
  crm,
];
