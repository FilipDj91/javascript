
class Foo {
    constructor(name) {
        this.name = name;


    }
    getNameSeparator() {
        return "-";


    }

}

class FooBar extends Foo {

    constructor(name, index) {

        this.index = index;

    }

    getFullName() {
        return this.name + super.getNameSeparator() + this.index;

    }
}

var firstFooBar = new FooBar("foo", 1);
console.log(firstFooBar.name);



class MyClass {
static staticMethod() {
console.log("This is static method.");


}
}

MyClass.staticMethod();