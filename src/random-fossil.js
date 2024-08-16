import axios from "axios";

async function getRandomFossil() {

  const response = await axios.get('/random-fossil.json');

  document.querySelector("#random-fossil-image").innerHTML = `<img src="${response.data.img}" />`
  document.querySelector("#random-fossil-name").innerHTML = `<p>${response.data.name} </p>`

}



document.querySelector("#get-random-fossil").addEventListener("click", getRandomFossil);


