const ROUTES = {
  ROOT: "/",
  HOME: "/home",
  PRODUCTS: "/products",
  ABOUT: "/about",
  SIGNIN: "/sign-in",
  //REGISTRATION: "/registration",
  CART: "/cart",
  FAVPRODUCTS: "/favorite-products",
  CRM: "/crm",
  SINGLE_PRODUCT: "/product/:productId",
};

export default ROUTES;

// user: /product/100/red
// router: /product/:productId/:color
// component: params.productId -> 100, parama.color -> red
