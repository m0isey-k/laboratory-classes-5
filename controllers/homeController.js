const { MENU_LINKS } = require("../constants/navigation");
const Cart = require("../models/Cart");

exports.getHomeView = (request, response) => {
  response.render("home.ejs", {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
    cartCount: Cart.getProductsQuantity(),
  });
};
