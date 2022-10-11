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
fetch("./back/guitars.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(data => {
  
  })
  .catch(function(error) {
    // Gestion des erreurs
    console.error("Something goes wrong!");
    console.error(error);
  });


  fetch("./back/studio.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(data => {
    // Utilisation des données dé-jsonifiées dans l'objet data
    console.table(data);
    // Regardez la structure du json, comprenez son contenu, intégrez-le
    // dans votre HTML.
  
    let index=0;


    for(let item of data){

      let cName = 'num'+index;

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
      document.querySelector('.'+cName).appendChild(studio);
      document.querySelector('.'+cName).appendChild(textImg);

      index++;
    }

  })
  .catch(function(error) {
    // Gestion des erreurs
    console.error("Something goes wrong!");
    console.error(error);
  });
