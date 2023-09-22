//creating an object by using the new object () method

var myCar = new Object();

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

myCar.color = 'Blue';
console.log(myCar);

// Creating an object by using the object literal

var person = {
    firstName: 'Filip',
    lastName: 'Dukic',
    id: 98539859438,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;

    }

};

console.log(person.id);
console.log(person.lastName);
console.log(person.fullName());


myJson = `{
"make": "Mercedes-Benz",
    "model": "CLK-Class",
    "year": 2009,
    "vin": "WBA3A5C50FF098464"
  }`;

myObject = JSON.parse(myJson);

console.log(myObject.year);

var phones = {
    brand: {
        manufacturer: 'Apple',
        model: 'iPhone 15 Pro Max'


    },
    color: ['Sierra Blue', 'Silver', 'Gold', 'White'],
    price: 999,
    display: '6.1-inch dispaly',
    qty: 184,
    checkStock: function () {
        if (this.qty > 0) {


            return "in-stock";

        } else {
            return "out-of-stock";


        }


    },



};

console.log(`You have selected ${phones.model}. ${phones.checkStock() == 'in-stock' ? 'Congrats, this phone is in stock.' : 'Sorry, we do not have that phone in stock.'}`)

var myPhonesJSON = JSON.stringify(phones);
console.log(myPhonesJSON);