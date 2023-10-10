let car = {
    name: "Volvo",
    driving: function () {
        console.log(this.name, "is driving");

    }
}

let bike = {
name: "Yamaha",
drifting: function() {
    console.log(this.name, "is drifting");
}

}

let racing = car.driving.bind(bike);
racing(); 

//


