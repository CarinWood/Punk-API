const savedNumber = localStorage.getItem("beerId");
const id = parseInt(savedNumber, 10);
const base_url = "https://api.punkapi.com/v2/beers/";
let description = document.querySelector(".description");
let beerName = document.querySelector(".beer-name");
let abv = document.querySelector(".abv");
let volume = document.querySelector(".volume");
let ingredients = document.querySelector(".ingredients");
let hops = document.querySelector(".hops");
let showpic = document.querySelector(".showpic");

async function getBeer() {
  try {
    const response = await fetch(base_url + id);
    const data = await response.json();
    beerName.innerText = data[0].name;
    description.innerText = data[0].description;
    abv.innerText = data[0].abv + "% alcohol";
    volume.innerText = data[0].volume.value + " " + "litres";
    showpic.src = data[0].image_url;
    data[0].food_pairing.forEach((meal) => {
      let food = document.createElement("p");
      food.innerText = meal;
      document.querySelector(".food").appendChild(food);
    });
    let tips = document.querySelector('.tips')
    tips.innerHTML = data[0].brewers_tips

    console.log(data[0].brewers_tips);

    for (const ingredient in data[0].ingredients) {
      let listItem = document.createElement("li");
      listItem.innerText = ingredient;
      ingredients.appendChild(listItem);
    }

    const hopsList = data[0].ingredients.hops;
    hopsList.forEach((hop) => {
      let listItem = document.createElement("li");
      listItem.innerText = hop.name;
      hops.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error", error);
  }
}

getBeer();
