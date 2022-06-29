//email//

let email = document.getElementById('email')
let error = document.getElementById('error')

var regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/

email.addEventListener('input', (event) => {
  if (!regexEmail.test(event.target.value)) {
    error.innerText = 'Le format de l\'email est incorrect'
  } else {
    error.innerText = ''
  }
})

//mot de passe//

let password = document.getElementById('password')
let error2 = document.getElementById('error2')

password.addEventListener('input', (event) => {
  if (event.target.value.length < 6) {
    error2.innerText = 'le mot de passe doit contenir au moins 6 caractères'
  } else {
    error2.innerText = ''
  }
})

//checkbox and message//

let checkbox = document.getElementById('newsletter')
let select = document.getElementById('framework')
let select2 = document.getElementById('Language')
let message = document.querySelector('#message')
let message2 = document.querySelector('#message2')

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    alert('Vous acceptez de recevoir la newsletter')
  }
})

select.addEventListener('change', (event) => {
  message.innerText = `Votre framework préferé est le ${event.target.value}`
})
select2.addEventListener('change', (event) => {
  message2.innerText = `Votre language de programmation préferé est le ${event.target.value}`
})

// Validation Formulaire

form.addEventListener('submit', (event) => {
  if (error.innerText !== '') {
   event.preventDefault()
   alert("Le formulaire contient des erreurs et n'a pas été envoyé")
 }
})


//------------------------------------script du formulaire bootstrap pour aider et comparer------------------------------------------------//

    //=============== START - DECLARATION DU FORMULAIRE ===============//    

    (function() {
      'use strict'

      let form = document.getElementById('lessonForm');

      form.addEventListener('submit', function(event) {
          
          Array.from(form.elements).forEach((input) => {
              if (input.type !== "submit") {
                  if (!validateFields(input)) {
                      
                      event.preventDefault();
                      event.stopPropagation();
                      
                      input.classList.remove("is-valid");
                      input.classList.add("is-invalid");
                      input.nextElementSibling.style.display = 'block';
                  } 
                  else {
                      input.nextElementSibling.style.display = 'none';
                      input.classList.remove("is-invalid");
                      input.classList.add("is-valid");
                  }
              }
          });
      }, false)
  })()

  //=============== END - DECLARATION DU FORMULAIRE ===============//

  // Validation d'un champ REQUIRED
  function validateRequired(input) {
      return !(input.value == null || input.value == "");
  }

  // Validation du nombre de caractéres : MIN & MAX
  function validateLenght(input, minLength, maxLength) {
      return !(input.value.length < minLength || input.value.length > maxLength);
  }

  // Validation des caractères : LATIN & LETTRES
  function validateText(input) {
      return input.value.match("^[A-Za-z]+$");
  }

  // Validation d'un e-mail
  function validateEmail(input) {
      let EMAIL = input.value;
      let POSAT = EMAIL.indexOf("@");
      let POSDOT = EMAIL.lastIndexOf(".");

      return !(POSAT < 1 || (POSDOT - POSAT < 2));
  }

  // Validation Code Postal
  function validatePostCode(input) {
      return input.value.match("^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$");
  }

  // Validation Adresse
  function validateAddress(input) {
      return input.value.match(/^\s*\S+(?:\s+\S+){2}/);
  }

  // Validation du Numéro de téléphone
  function validatePhoneNumber(input) {
      return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
  }

  // Validation d'un checkbox
  function validateTerms(input) {
      return input.checked;
  }
  //=============== START - VALIDATION DES CHAMPS DU FORMULAIRE ===============//

  function validateFields(input) {

      let fieldName = input.name;

      // Validaton de l'input PRENOM
      if (fieldName == "firstName") {
          if (!validateRequired(input)) {
              return false;
          }

          if (!validateLenght(input, 2, 20)) {
              return false;
          }

          if (!validateText(input)) {
              return false;
          }

          return (true);
      }

      // Validaton de l'input NOM
      if (fieldName == "lastName") {
          if (!validateRequired(input)) {
              return false;
          }

          if (!validateLenght(input, 2, 20)) {
              return false;
          }

          if (!validateText(input)) {
              return false;
          }

          return (true);
      }

      // Validaton de l'input EMAIL
      if (fieldName == "email") {

          if (!validateRequired(input)) {
              return false;
          }

          if (!validateEmail(input)) {
              return false;
          }

          return (true);
      }

      // Validaton de l'input NUMERO DE TELEPHONE
      if (fieldName == "phoneNumber") {
          if (!validateRequired(input)) {
              return false;
          }

          if (!validatePhoneNumber(input)) {
              return false;
          }

          return (true);
      }

      // Validaton de l'input ADRESSE
      if (fieldName == "address") {

          if (!validateRequired(input)) {
              return false;
          }

          if (!validateAddress(input)) {
              return false;
          }

          return (true);
      }

      // Validaton de l'input VILLE
      if (fieldName == "city") {
          if (!validateRequired(input)) {
              return false;
          }

          return (true);
      }

      // Validaton de l'input CODE POSTAL
      if (fieldName == "postCode") {

          if (!validateRequired(input)) {
              return false;
          }

          if (!validatePostCode(input)) {
              return false;
          }

          return (true);
      }

      // Validaton de la checkbox CONDTIONS
      if (fieldName == "conditions") {
          if (!validateTerms(input)) {
              return false;
          }
           return (true);    
      }
  }

  //=============== END - VALIDATION DES CHAMPS DU FORMULAIRE ===============//
