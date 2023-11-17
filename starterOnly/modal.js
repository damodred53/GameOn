function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Gestion des liens actifs dans la barre de navigation */

const manageNavBar = () => {
  const eventNavBar = document.querySelectorAll('.navBar_link');
  const arrayNavBar = Array.from(eventNavBar);

  const eachNavBarElement = arrayNavBar.forEach((elem) => {
    elem.addEventListener('click', () => {
      eventNavBar.forEach((elem) => {
        elem.classList.remove('active');
      })
      elem.classList.add('active');
    })
  })
}

manageNavBar();






// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* Fermeture de la modale */


const crossClosure = document.querySelector('.close');

const modalClosure = () => {
  modalbg.style.display = "none";

}

crossClosure.addEventListener('click', modalClosure)



