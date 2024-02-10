let inputField = document.querySelector(".input-field");
let currentPage = 0;
let currentBeerName;

async function searchBeer(beerName, page) {
  currentPage = page;
  currentBeerName = beerName;
  document.querySelector(".search-results").innerHTML = "";
  try {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${beerName}&page=${page}&per_page=10`
    );
    const data = await res.json();
    data.forEach((beer) => {
      let beerResult = document.createElement("p");
      beerResult.innerText = beer.name;
      document.querySelector(".search-results").appendChild(beerResult);
      beerResult.addEventListener("click", () => {
        localStorage.setItem("beerId", beer.id.toString());
        window.location.href = "overview.html";
      });
    });
  } catch (error) {
    console.error("Error", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchBeer(inputField.value, 1);
  });
});

document.querySelector("#right").addEventListener("click", () => {
  currentPage++;
  searchBeer(currentBeerName, currentPage);
});

document.querySelector("#left").addEventListener("click", () => {
  if (currentPage === 1) {
    return;
  } else {
    currentPage--;
    searchBeer(currentBeerName, currentPage);
  }
});
