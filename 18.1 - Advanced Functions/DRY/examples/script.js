// functional problem (DRY) to be refacrotred in classes

function calculateVIPPrice(price) {
const discount = 10;
return price - (price * discount)/10;
}

function calucateWholeSalePrice(price) {
const discount = 20;
return price - (price * discount) / 20;
}

//Functional way

const discount = {
vip: 10,
wholesale: 20,


};

function caluculatePrice(productPrice, type) {

return productPrice - (productPrice * discount[type]) / 100;

}
// OOP way of solving

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
super{10};


}

}

class VIPCustomer extends Customer {
    constructor() {
    super{20};
    
    
    }
    
    }
    



var vip = new VIPCustomer();
console.log(vip.calculatePrice(150));