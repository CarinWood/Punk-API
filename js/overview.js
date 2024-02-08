const savedNumber = localStorage.getItem("beerId");
const id = parseInt(savedNumber, 10);
const base_url = "https://api.punkapi.com/v2/beers/";

async function getBeer() {
  try {
    const response = await fetch(base_url + id);
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error("Error", error);
  }
}

getBeer();
