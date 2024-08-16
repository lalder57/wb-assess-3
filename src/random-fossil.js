import axios from "axios";


async function getRandomFossil() {
  const bodyObj = {
    randomFossil: document.querySelector("#get-random-fossil").value
  }
  
  const response = await axios.post("/random-fossil.json", bodyObj);
  console.log(response)

  // document.querySelector("#radnom-fossil-image").innerHTML = `<img />`;
  // document.querySelector("#random-fossil-name").innterHTML = `<p>``</p>`;

}

document.querySelector('#get-random-fossil').addEventListener('click', getRandomFossil);






// async function showDogPhoto(evt) {
//   // async await method
//     const response = await axios.get("https://dog.ceo/api/breeds/image/random")
//     document.querySelector("#dog-image").innerHTML = `<img src="${response.data.message}" />`
// }

// document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);
// async function orderCookies(evt) {
//   // TODO: Need to preventDefault here, because we're listening for a submit event!
//   // TODO: show the result message after your form
//   // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
//   evt.preventDefault();

//   const formData = {
//     cookieType: document.querySelector("#cookie-type-field").value,
//     qty: document.querySelector("#qty-field").value,
//   }

//   const response = await axios.post("/order-cookies.json", formData);
//   // console.log(response.data.resultCode);

//   const orderStatusDiv = document.querySelector("#order-status");
//   orderStatusDiv.innerText = response.data.message;
  
//   if (response.data.resultCode === "ERROR") {
//     orderStatusDiv.classList.add('order-error');
//   } else {
//     orderStatusDiv.classList.remove('order-error');
//   }

// }
// document.querySelector('#order-form').addEventListener('submit', orderCookies);

