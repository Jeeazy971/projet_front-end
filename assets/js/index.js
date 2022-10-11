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

const header = document.querySelector('header');
const monH1 = document.createElement('h1');

fetch('./back/guitars.json')
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(datas => {
    // Utilisation des données dé-jsonifiées dans l'objet data
    datas.forEach((data) => {
      console.log(data.name);
      //header.innerHTML += `<h1>${data.name}</h1>`;
    });



    // console.table(datas);
    // Regardez la structure du json, comprenez son contenu, intégrez-le
    // dans votre HTML.
  })
  .catch(function(error) {
    // Gestion des erreurs
    console.error("Something goes wrong!");
    console.error(error);
  });


  