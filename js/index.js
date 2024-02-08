let randomPic = document.querySelector(".random");
let beername = document.querySelector(".name");
let beerBtn = document.querySelector(".beer-btn");
let spinner = document.querySelector(".spinner");
spinner.style.display = "none";
let image = document.querySelector(".random");
let seeMore = document.querySelector(".see-more");
let id = 0;

fetch("https://api.punkapi.com/v2/beers/random")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return res.json();
  })
  .then((data) => {
    randomPic.src = data[0].image_url;
    beername.innerText = data[0].name;
    id = data[0].id;
  });

async function getRandom() {
  spinner.style.display = "block";
  image.style.display = "none";
  try {
    const res = await fetch("https://api.punkapi.com/v2/beers/random");
    const data = await res.json();
    randomPic.src = data[0].image_url;
    beername.innerText = data[0].name;
    id = data[0].id;
    spinner.style.display = "none";
    image.style.display = "block";
  } catch (error) {
    console.error("Error", error);
  }
}

async function goToOverview() {
  try {
    console.log("id before storing it: " + id);
    localStorage.setItem("beerId", id.toString());
    window.location.href = "overview.html";
  } catch (error) {
    console.error("Error:", error);
  }
}

beerBtn.addEventListener("click", getRandom);
seeMore.addEventListener("click", goToOverview);
