// 1.

let name = function () {
console.log("Ovo je njegovo" );

}

function name {return vratiNesto}
vratiNesto();  


let x = "John Doe";
function vratiNesto(name) {
   let x = name;
   function f() { return x; }
   return f;
}




let y = vratiNesto("Jane Doe");
let z = vratiNesto()();

// y = John Doe
// z = 