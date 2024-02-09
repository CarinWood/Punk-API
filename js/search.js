let inputField = document.querySelector(".input-field");

async function searchBeer(beerName) {
  try {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${beerName}`
    );
    const data = await res.json();
    console.log(data);
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
