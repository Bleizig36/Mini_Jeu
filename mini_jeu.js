//Je sélectione et je stoque
const btnRed = document.getElementById('btn-red');
console.log(btnRed,"Balle rouge");

const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue,"Balle bleue");

const btnYellow = document.getElementById('btn-yellow');
console.log(btnYellow,"Balle jaune");

const btnGrenn = document.getElementById('btn-grenn');
console.log(btnGrenn,"Balle verte");

// J'agi
 
// Ici la fonction est asycrone -> elle n'agis pas tout de suite 
//On définis un compteur
let comteur = 0;
console.log(comteur, 'comteur');

//On comte le nmb de click : 
btnRed.addEventListener('click', function(){
    add()
});

btnBlue.addEventListener('click', function(){
    add()
});

btnGrenn.addEventListener('click', function(){
    add()
});

btnYellow.addEventListener('click', function(){
    add()
});

let titre = document.getElementById('titre')
// enlever les repetissions

function add(){
    comteur = comteur + 1 
    console.log(comteur, 'Yeaa et 1 de plus ! ')
    titre.innerText = comteur , 'Yeaa et 1 de plus ! '
}

// enplacement -> là où on met le truc
// innerText -> là où on met le texte 

