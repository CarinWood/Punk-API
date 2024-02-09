let inputField = document.querySelector(".input-field");

async function searchBeer(beerName) {
  document.querySelector(".search-results").innerHTML = "";
  try {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${beerName}&page=1&per_page=10`
    );
    const data = await res.json();
    data.forEach((beer) => {
      let beerResult = document.createElement("p");
      beerResult.innerText = beer.name;
      document.querySelector(".search-results").appendChild(beerResult);
    });
  } catch (error) {
    console.error("Error", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchBeer(inputField.value);
  });
});
