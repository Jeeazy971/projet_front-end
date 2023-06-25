'use strict';

// DARCY
fetch('./back/studio.json')
    .then(function (res) {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        let index = 0;
        for (let item of data) {
            let cName = 'num' + index;
            let container = document.createElement('div');
            container.classList.add('container-studio', cName);
            document.querySelector('.container').appendChild(container);

            let studio = document.createElement('img');
            studio.src = `./assets/images/guitares/${item.imageUrl}`;
            studio.alt = item.altTxt;
            studio.title = item.title;

            let textImg = document.createElement('p');
            textImg.classList.add('text-studio');
            textImg.innerHTML = item.title;
            document.querySelector('.' + cName).appendChild(studio);
            document.querySelector('.' + cName).appendChild(textImg);
            index++;
        }
    })
    .catch(function (error) {
        console.error('Something goes wrong!');
        console.error(error);
    });

// JOSUE
const urlGuitar = './back/guitars.json';
const urlPopular = './back/populars.json';

const contentGuitar = document.querySelector('.section-guitar > .content-guitar');
const contentAside = document.querySelector('.aside-guitar > .content-aside');

const displayStar = (stars_number) => {
    let star = '';
    let result_star = 5 - stars_number;
    for (let i = 0; i < stars_number; i++) {
        star += `<i class="fa-solid fa-star"></i>`;
    }
    for (let j = 0; j < result_star; j++) {
        star += `<i class="fa-regular fa-star"></i>`;
    }
    return star;
};

const getAllGuitar = async () => {
    try {
        const response = await fetch(urlGuitar);
        const data = await response.json();
        return displayAllGuitar(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des guitares : ', error);
    }
};

const displayAllGuitar = (guitars) => {
    guitars.forEach((guitar) => {
        contentGuitar.innerHTML += `
      <article class="electric-guitar">
        <img src=./assets/images/guitares/${guitar.imageUrl} alt="${guitar.name}">
        <p>${guitar.name}</p>
        <p>${guitar.price} € ou <span class="price-bold">${
            guitar.monthly
        } € / mois</span></p>
        <span>${displayStar(guitar.stars)}</span>
      </article>
      `;
    });
};

const getAllPopular = async () => {
    try {
        const response = await fetch(urlPopular);
        const data = await response.json();
        displayAllPopular(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des guitares populaires : ', error);
    }
};

const displayAllPopular = (popularGuitars) => {
    for (let popular of popularGuitars) {
        contentAside.innerHTML += `
      <article class="guitar-aside">
        <img src=./assets/images/guitares/${popular.imageUrl} alt="${popular.name}">
        <div>
          <p>${popular.altTxt}</p>
          <p>${popular.price} € ou <span class="price-bold">${
            popular.monthly
        } € / mois</span></p>
          <span>${displayStar(popular.stars)}</span>
        </div>
      </article>`;
    }
};

getAllPopular();
getAllGuitar();
