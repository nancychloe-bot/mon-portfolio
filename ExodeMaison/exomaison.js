const nomMois = document.querySelector("#nom-mois");
const nomJour = document.querySelector("#nom-jour");
const numeroJour = document.querySelector("#numero-jour");
const annee = document.querySelector("#annee");

const boutonPrecedent = document.querySelector("#precedent");
const boutonSuivant = document.querySelector("#suivant");

const choisirDate = document.querySelector("#choisir-date");

const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];

const jours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
];

let dateActuelle = new Date();



function afficherCalendrier() {

    nomMois.innerHTML = mois[dateActuelle.getMonth()];

    nomJour.innerHTML = jours[dateActuelle.getDay()];

    numeroJour.innerHTML = dateActuelle.getDate();

    annee.innerHTML = dateActuelle.getFullYear();
}



boutonSuivant.addEventListener("click", () => {

    dateActuelle.setDate(dateActuelle.getDate() + 1);

    afficherCalendrier();
});



boutonPrecedent.addEventListener("click", () => {

    dateActuelle.setDate(dateActuelle.getDate() - 1);

    afficherCalendrier();
});



choisirDate.addEventListener("change", () => {

    dateActuelle = new Date(choisirDate.value);

    afficherCalendrier();
});

afficherCalendrier();