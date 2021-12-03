const button = document.querySelector(".btn");
const content = document.querySelector(".content-section");
const mapImage = document.querySelector("img");
const list = document.querySelector(".list");
const apiEndPoint = "https://api.tomtom.com/map/1/staticimage";

button.addEventListener("click", serveData);

console.log(process.env.AUTH_TOKEN);

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
&center=${data[0].longitude},${data[0].latitude}
&width=550
&height=350
&view=IN
&key=${process.env.MAP_API_KEY}`;

  for (let i = 0; i < data.length; i++) {
    const listElement = document.createElement("li");
    listElement.innerHTML = `<h2>${data[i].name}</h2>
    <p>Its is located in <strong>${data[i].address}</strong> and ${Math.floor(
      data[i].distance
    )}km far.</p>
    <p>Contact: ${data[i].contact}</p>`;

    list.append(listElement);
  }
}
