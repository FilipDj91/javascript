const apiUrl = "https://catfact.ninja/fact";

function fetchDataFromURL(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchDataFromURL(apiUrl)
  .then((result) => console.log("Data fetched successfully:", result))
  .catch((error) => console.error("Error fetching data:", error));
