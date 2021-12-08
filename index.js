const button = document.querySelector(".btn");
const content = document.querySelector(".content-section");
const mapImage = document.querySelector("img");
const list = document.querySelector(".list");
const apiEndPoint = "https://api.tomtom.com/map/1/staticimage";
require("dotenv").config();

button.addEventListener("click", serveData);

async function fetchData() {
  const response = fetch("https://find-me-worker.calebjoshuapaul.workers.dev/")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
  return response;
}

async function serveData() {
  const data = await fetchData();
  console.log(data);
  mapImage.src = `${apiEndPoint}
?layer=basic
&style=main
&format=png
&zoom=14
&center=${data[1].longitude},${data[1].latitude}
&width=550
&height=350
&view=IN
&key=${process.env.API_KEY}`;

  for (let i = 0; i < data[0].length; i++) {
    const listElement = document.createElement("li");
    listElement.innerHTML = `<h2>${data[0][i].name}</h2>
    <p>Its is located in <strong>${
      data[0][i].address
    }</strong> and ${Math.floor(data[0][i].distance)}km far.</p>
    <p>Contact: ${data[0][i].contact}</p>`;

    list.append(listElement);
  }
}
