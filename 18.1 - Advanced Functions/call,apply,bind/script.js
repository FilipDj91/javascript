var person = {
name: 'Harry',
greet: function() {

    console.log(`Hello, ${this.name}`);


},


};

person.greet();

// explicit binding

function greet() {
console.log(`Hello, ${this.name}`);


}

var person1 = {name: "Ron"};

greet.call(person1);

//

function multiply(x,y){
console.log({x,x});

return `${this.name} has ${x * y} points.`;


}

var person2 = {
name: "Harry",

};



var person3 = {
name: "Ron",

};

var two = multiply.bind(person2,2);
var three = multiply.bind(person3,3);

console.log(two(3));
console.log(three(10));

//


//call


var person4 = {
    name: "Harry",
    
    };
    
    
    
    var person5 = {
    name: "Ron",
    
    };

    function greet(greeting, other) {
console.log(`${greeting}, ${this.name}`);
console.log(`${other}, ${this.name}`);

    }

   // greet.call(person4, "Hello", "Hi"); 
   // greet.call(person5, "Hello", "Hello, my name is");

    greet.apply(person4, ["Hello", "Hi"]);


    function greet(name){
console.log(`Hello, ${name} ! My name is ${this.name}`);
    }

    var person6 = {
name: "John",

    };

    greet.call(person6, "Alice"); 