
/* Gestion du responsive des différents éléments de la page d'accueil */

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

  const eachNavBarElement = eventNavBar.forEach((elem) => {
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
const footer = document.querySelector('footer');
const hero_section = document.querySelector('.hero-section');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  
  modalbg.style.display = "block";
  footer.classList.add("hidden_part");
  hero_section.classList.add("hidden_part");
};

/* Fermeture de la modale */

const modalClosure = () => {
  
  footer.classList.remove("hidden_part");
  hero_section.classList.remove("hidden_part");
  document.querySelector('.bground').style.display = "none";
}

const crossClosure = document.querySelector('.close');

crossClosure.addEventListener('click', () => {
  document.querySelector('form').style.display = "block";

  if (document.querySelector('.newDivElement')) {
    document.querySelector('.newDivElement').style.display = "none";
  } 
      modalClosure();
});

const validate = () => {


  /* Vérification si le prénom contient au moins deux caractères */
  let validateFirstName = false;
  const controle_firstName = document.querySelector('#first');
  if (controle_firstName.value.length < 2) {
    document.querySelector('.firstname_error').style.display = "block";
  } else {
    validateFirstName = true;
    document.querySelector('.firstname_error').style.display = "none";
  }

  /* Vérification si le nom de famille contient au moins deux caractères */
  let validateFamilyName = false;
  const controle_lastName = document.querySelector('#last');
  if (controle_lastName.value.length < 2) {
    document.querySelector('.familyname_error').style.display = "block";
  } else {
    validateFamilyName = true;
    document.querySelector('.familyname_error').style.display = "none";
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
 
 /*Vérification si l'utilisateur a indiqué une date */
 let dateValidation = false;
 const isDateValid = document.querySelector('#birthdate');
 if (isDateValid.value === "") {
  document.querySelector('.date_error').style.display = "block";
 } else {
  dateValidation = true;
  document.querySelector('.date_error').style.display = "none";
 }
  

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
  } else {
    isAcceptationInputChecked = true;
    document.querySelector('.conditions_error').style.display = "none";
  }

  if (validateFirstName && validateFamilyName && isEmailValid && dateValidation && isQuantityValidate && isAcceptationInputChecked   && isOneInputChecked ) {
    console.log("le formulaire est valide")
    return true
  } else {
    console.log("le formulaire est invalide")
    return false
  }
}

/* Intégration du formulaire */

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = validate();
  validate();
  if (isValid) {
    document.querySelector('form').reset();
    isValid = false;
    document.querySelector('form').style.display = "none";

    /* Si ce n'est pas la première fois que que nous ouvrons cette modale */
    if (document.querySelector('.newDivElement')) {
      document.querySelector('.newDivElement').style.display = "flex";
    } else {

    /* création du remerciement post-validation */

    const myDiv = document.createElement('div');
    myDiv.classList.add('newDivElement')
    document.querySelector('.modal-body').appendChild(myDiv);

    const myParagraph = document.createElement('p');
    myParagraph.innerHTML = "Merci pour votre inscription";
    myParagraph.classList.add('newElementParagraph');
    document.querySelector('.newDivElement').appendChild(myParagraph);

    const myInput = document.createElement('input');
    myInput.value = "Fermer";
    myInput.classList.add('btn-submit');
    myInput.classList.add('btn_submit_validation');
    document.querySelector('.newDivElement').appendChild(myInput);

    myInput.addEventListener('click', () => {
      !isValid
      document.querySelector('.newDivElement').style.display = "none";
      document.querySelector('form').style.display = "block";
      modalClosure();
    });
    }
  }
})