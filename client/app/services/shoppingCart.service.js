class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product, quantity = 1) {
    const requestedTea = this.products.find( x => x.product === product);
    if(!requestedTea){
      this.products.push({product:product , quantity:quantity});
    }
    else{
      requestedTea.quantity += quantity;
    }
  }

  removeProduct(product) {
    const requestedTea = this.products.find( x => x.product == product);
    const productIndex = this.products.indexOf(requestedTea);
    if (productIndex > -1) {
      this.products.splice(productIndex, 1);
    }
  }

  getQuantity() {
    let totalQuantity = 0;
    for(let i = 0; i< this.products.length; i++){
      totalQuantity += this.products[i].quantity;
    }

    return totalQuantity;
  }

  getTotalPrice() {
    if (this.products.length == 0) {
      return 0;
    }

    let totalPrice = 0;
    for(let i = 0; i< this.products.length; i++){
      totalPrice += this.products[i].product.price * this.products[i].quantity;
    }

    return totalPrice;
  }

  submitCheckout(){

  }

}

export default ShoppingCart;
