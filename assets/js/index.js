"use strict";
/*
Utilisez l'API Fetch pour collecter les données dans le backend.
Les fichiers à récupérer sont :
../back/guitars.json
../back/populars.json
../back/studio.json
Les images à insérer sont dans le répertoire ../back/images/,
vous trouverez leurs noms et descriptions dans les JSON téléchargés.
*/
/* Exemple de code d'utilisation de fetch :

*/

const urlGuitar = "./back/guitars.json";
const urlPopular = "./back/populars.json";

const contentGuitar = document.querySelector(".section-guitar > .content-guitar");
const guitarAside = document.querySelector(".aside-guitar > .content-aside");


const getAllGuitar = async () => {
  const response = await fetch(urlGuitar);
  const datas = await response.json();
  return displayAllGuitar(datas);
};

// FETCH GUITARS

const displayAllGuitar = (guitars) => {
  guitars.forEach((electricGuitar) => {
    try {
      contentGuitar.innerHTML += `
          <div class="electric-guitar">
            <img src=./assets/images/guitares/${electricGuitar.imageUrl} alt=${electricGuitar.imageUrl}>
            <p>${electricGuitar.name}</p>
            <p>${electricGuitar.price} € ou <span class="price-bold">${electricGuitar.monthly} € / mois</span></p>
          </div>
          `;
      contentGuitar.append(contentGuitar);
    } catch (error) {
      console.log(error.message);
    }
  });
};

// FETCH POPULARS GUITARS

const getAllPopluars = async () => {
  const response = await fetch(urlPopular);
  const datas = await response.json();
  return displayAllPopular(datas);
};

const displayAllPopular = (popularGuitar) => {
  popularGuitar.forEach((popular) => {
    guitarAside.innerHTML += `
      <div class="guitar-aside">
      <img src=./assets/images/guitares/${popular.imageUrl} alt=${popular.imageUrl}>
      <p>${popular.name}</p>
      <p>${popular.price} € ou <span class="price-bold">${popular.monthly} € / mois</span></p>
      </div>
    `;
    guitarAside.append(guitarAside);
  });
};

getAllPopluars();

getAllGuitar();
displayAllGuitar();
