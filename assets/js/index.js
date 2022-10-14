"use strict";

// DARCY
fetch("./back/studio.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    // Utilisation des données dé-jsonifiées dans l'objet data
    // Regardez la structure du json, comprenez son contenu, intégrez-le
    // dans votre HTML.

    let index = 0;

    for (let item of data) {
      let cName = "num" + index;

      let container = document.createElement("div");
      container.classList.add("container-studio", cName);
      document.querySelector(".container").appendChild(container);

      let studio = document.createElement("img");
      studio.src = `./assets/images/guitares/${item.imageUrl}`;
      studio.alt = item.altTxt;
      studio.title = item.title;

      let textImg = document.createElement("p");
      textImg.classList.add("text-studio");
      textImg.innerHTML = item.title;
      document.querySelector("." + cName).appendChild(studio);
      document.querySelector("." + cName).appendChild(textImg);

      index++;
    }
  })
  .catch(function (error) {
    // Gestion des erreurs
    console.error("Something goes wrong!");
    console.error(error);
  });

// JOSUE

/**
 *
 * TODO RECUPERATION DE L'API SEPAREMENT
 *
 * **/

const urlGuitar = "./back/guitars.json";
const urlPopular = "./back/populars.json";

const contentGuitar = document.querySelector(
  ".section-guitar > .content-guitar"
);

const contentAside = document.querySelector(".aside-guitar > .content-aside");
const guitarAside = document.querySelector(".guitar-aside");

// AFFICHE MES ETOILES
const displayStar = (stars_number) => {
  let star = "";
  let result_star = 5 - stars_number;

  // BOUCLE LE NOMBRE D'ETOILE A AFFICHER
  for (let i = 0; i < stars_number; i++) {
    star += `<i class="fa-solid fa-star"></i>`;
  }

  // BOUCLE LE NOMBRE D'ETOILE VIDE
  for (let j = 0; j < result_star; j++) {
    star += `<i class="fa-regular fa-star"></i>`;
  }

  // RETOURNE MES ETOILES + ETOILES VIDE
  return star;
};

/**
 *
 * TODO: FONCTION ASYNCHRONE GETALLGUITAR
 *
 *
 **/

// 

const getAllGuitar = async () => {
  const response = await fetch(urlGuitar);
  const datas = await response.json();
  return displayAllGuitar(datas);
};

/**
 *
 *  TODO: affichage des guitars
 *
 * **/

const displayAllGuitar = (guitars) => {
  guitars.forEach((guitar) => {
    try {
      contentGuitar.innerHTML += `
          <article class="electric-guitar">
            <img src=./assets/images/guitares/${guitar.imageUrl} alt=${
        guitar.imageUrl
      }>
            <p>${guitar.name}</p>
            <p>${guitar.price} € ou <span class="price-bold">${
        guitar.monthly
      } € / mois</span></p>
            <span>${displayStar(guitar.stars)}</span>
          </article>
          `;
    } catch (error) {
      console.log(error.message);
    }
  });
};

/**
 *
 * TODO: FONCTION ASYNCHRONE FETCH POPULAR GUITARS
 *
 *
 **/

const getAllPopular = async () => {
  const response = await fetch(urlPopular);
  const datas = await response.json();
  displayAllPopular(datas);
};

/**
 *
 *  TODO: affichage des articles populaire
 *
 * **/

const displayAllPopular = (popularGuitar) => {
  for (let popular of popularGuitar) {
    try {
      contentAside.innerHTML += `
    <article class="guitar-aside">
      <img src=./assets/images/guitares/${popular.imageUrl} alt=${
        popular.imageUrl
      }>
      <div>
        <p>${popular.altTxt}</p>
        <p>${popular.price} € ou <span class="price-bold">${
        popular.monthly
      } € / mois</span></p>
        <span>${displayStar(popular.stars)}</span>
      </div>
    </article>`;
    } catch (error) {
      console.log(error.message);
    }
  }
};

getAllPopular();
getAllGuitar();
