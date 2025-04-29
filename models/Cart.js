const Product = require("./Product");

class Cart {
  static #items = [];
  static add(productName) {
    const product = Product.findByName(productName);

    if (!product) {
      throw new Error("Produkt nie istnieje")
    }
    const itemProdukt = this.#items.find(
      (item) => item.product.name === productName
    );
    if (itemProdukt) {
        itemProdukt.quantity += 1
    } else {
      this.#items.push({ product, quantity: 1 })
    }
  }
  static getItems() {
    return this.#items;
  }

  static getTotalPrice() {
    return this.#items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  static getProductsQuantity() {
    return this.#items.reduce((sum, item) => sum + item.quantity, 0);
  }

  static clearCart() {
    this.#items = [];
  }
}

module.exports = Cart;