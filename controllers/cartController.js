const Product = require("../models/Product");
const Cart = require("../models/Cart");
const {STATUS_CODE} = require("../constants/statusCode");

exports.addProductToCart = (request, response) => {
  const {name} = request.body

  try {
    Product.add(request.body)
    Cart.add(name)
    response.status(STATUS_CODE.FOUND).redirect("/products/new");
  } 

  catch (error) {
    response.status(STATUS_CODE.NOT_FOUND).send("Produkt nie istnieje");
  }
};

exports.getProductsCount = (_request, response) => { 
    const count = Cart.getProductsQuantity()
    response.status(STATUS_CODE.OK).json({count})
};