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

crossClosure.addEventListener('click', modalClosure);

/* fonction pour valider l'email via une expression régulière (regex) */

/*const validateEmail = (mail) => {
  const emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i)
  const isEmailValid =  emailReg.test(mail)
  console.log(isEmailValid);
  return  isEmailValid;

}*/


const validate = () => {


  /* Vérification si le prénom contient au moins deux caractères */
  let validateFirstName = false;
  const controle_firstName = document.querySelector('#first');
  if (controle_firstName.value.length < 2) {
    document.querySelector('.firstname_error').style.display = "block";

  } else {
    validateFirstName = true;
    document.querySelector('.firstname_error').style.display = "none";
    console.log(validateFirstName);
  }

  /* Vérification si le nom de famille contient au moins deux caractères */
  let validateFamilyName = false;
  const controle_lastName = document.querySelector('#last');
  if (controle_lastName.value.length < 2) {

    document.querySelector('.familyname_error').style.display = "block";

  } else {
    validateFamilyName = true;
    document.querySelector('.familyname_error').style.display = "none";
    console.log(validateFamilyName);
  }

  /* Vérification de la validité de l'adresse email */

  const email = document.querySelector('#email');
  const emailToValidate = email.value;

  const emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i)
  const isEmailValid =  emailReg.test(emailToValidate)
  if (!isEmailValid) {
  document.querySelector('.email_error').style.display = "block";

 }  else {
  document.querySelector('.email_error').style.display = "none";
 }
 /* isEmailValid sera true */
  

 /* Vérification si le champ du nombre de tournoi est bien un number */ 
  let isQuantityValidate = false;

  const numberTournament = document.querySelector('#quantity');

  if (numberTournament.value === "") {
    document.querySelector('.quantity_error').style.display = "block";
  } else {
    isQuantityValidate = true;
    document.querySelector('.quantity_error').style.display = "none";
  }

  /* Vérification si l'un des input radio a bien été coché */
  let isOneInputChecked = false;
  const inputAllTournament = document.querySelectorAll('.checkbox_input_radio');

      for (let i = 0; i < inputAllTournament.length ; i++) {
      if (inputAllTournament[i].checked) {
        isOneInputChecked = true;
        document.querySelector('.tournament_error').style.display = "none";
        break;
      } else {
        document.querySelector('.tournament_error').style.display = "block";
      }
    }

  /* Vérification de l'acceptation des conditions d'utilisation */ 
  let isAcceptationInputChecked = false;
  const testChecked = document.querySelector("#checkbox1")

  if (!testChecked.checked) {
    document.querySelector('.conditions_error').style.display = "block";
    console.log(isAcceptationInputChecked)
  } else {
    isAcceptationInputChecked = true;
    document.querySelector('.conditions_error').style.display = "none";
    console.log(isAcceptationInputChecked)
  }

  /* Vérification acceptation de la newletter */
  
  const test2 = document.querySelector("#checkbox2")

  if (test2.checked === false) {

  } 


  if (validateFirstName && validateFamilyName && isQuantityValidate && isAcceptationInputChecked   && isOneInputChecked ) {
    console.log("le formulaire est valide")
    return true
    
  } else {
    console.log("le formulaire est invalide")
    return false
    
  }

  

}




/* Intégration de la fonction de validation */



const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("Il n’y a pas eu de rechargement de page");


  validate();


})