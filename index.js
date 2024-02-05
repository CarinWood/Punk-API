let randomPic = document.querySelector(".random");

fetch("https://api.punkapi.com/v2/beers/random")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return res.json();
  })
  .then((data) => {
    console.log(data[0]);
    randomPic.src = data[0].image_url;
  });
