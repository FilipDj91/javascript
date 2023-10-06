/**************************************************
 * FUNCTIONAL PROBLEM (DRY) - TO BE REFACTORED IN CLASSES
 **************************************************/

function calculateVIPPrice(price) {
  const discount = 10;
  return price - (price * discount) / 10;
}

function calculateWholeSalePrice(price) {
  const discount = 20;
  return price - (price * discount) / 20;
}

// Functional way
const discounts = {
  vip: 10,
  wholesale: 20,
};

function calculatePrice(productPrice, type) {
  return productPrice - (productPrice * discounts[type]) / 100;
}

// OOP Way Of Solving
class Customer {
  constructor(discount) {
    this.discount = discount;
  }

  calculatePrice(price) {
    const discountNumber = (price * this.discount) / 100;
    return price - discountNumber;
  }
}

class VIPCustomer extends Customer {
  constructor() {
    super(10);
  }
}

class WholesaleCustomer extends Customer {
  constructor() {
    super(20);
  }
}

var vip = new VIPCustomer();
console.log(vip.calculatePrice(150));
