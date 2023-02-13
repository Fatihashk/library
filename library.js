
  function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }; 
 function like(b){
   if(+b.nextSibling.nextSibling.value!=1){ 
   b.nextSibling.nextSibling.value = parseInt(b.nextSibling.nextSibling.value)+1;
   b.nextSibling.nextSibling.style.color = "green";

 }}

 

 function dislike(b){
  if(+b.nextSibling.nextSibling.value!=1){
  b.nextSibling.nextSibling.value = parseInt(b.nextSibling.nextSibling.value)+1;
  b.nextSibling.nextSibling.style.color = "red";
  }
}

function login() { let name = document.forms["RegForm"]["Nom"];
let email = document.forms["RegForm"]["Email"];
let phone = document.forms["RegForm"]["Téléphone"];

let password = document.forms["RegForm"]["Mot de passe"];
let address = document.forms["RegForm"]["Adresse"];
let comment = document.forms["RegForm"]["Commentaire"];

if (name.value == "") {
  alert("Mettez votre nom.");
  name.focus();
  return false;
}
if (address.value == "") {
  alert("Mettez votre adresse.");
  address.focus();
  return false;
}
if (email.value == "") {
  alert("Mettez une adresse email valide.");
  email.focus();
  return false;
}
if (email.value.indexOf("@", 0) < 0) {
  alert("Mettez une adresse email valide.");
  email.focus();
  return false;
}
if (email.value.indexOf(".", 0) < 0) {
  alert("Mettez une adresse email valide.");
  email.focus();
  return false;
}
if (phone.value == "") {
  alert("Mettez votre numéro de téléphone.");
  phone.focus();
  return false;
}
if (password.value == "") {
  alert("Saisissez votre mot de passe");
  password.focus();
  return false;
}

if (comment.value == "") {
  alert("Écrivez un commentaire.");
  comment.focus();
  return false;
}
return true;
}

