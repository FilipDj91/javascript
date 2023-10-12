
const apiUrl = `http://localhost:3000/users`;

const requestData = {
  name: "Nino Škuflić",
  birthday: "01/01/1990",
  address: {
    street: "Radnička cesta 37a",
    city: "Zagreb",
    zip: 10000,
    country: "Croatia",
  },
  email: "nino.skuflic@predavaci.algebra.hr",
  phone: "+385 1 234 567",
};

const requestOptions = {
  method: "DELETE",
  headers: {
"Content - Type": "application/json",

    // Možete staviti autentifikacijske tokene, podatke, bla bla.
  },
  body: JSON.stringify(requestData),
};

document.querySelector("button").addEventListener("click", () => {
  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log("Response data:", data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});
