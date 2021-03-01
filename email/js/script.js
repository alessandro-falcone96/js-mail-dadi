// Esercizio Lista Email
var listeEmail = [
  "alessandro.falcone@ymail.com",
  "alessandro.falcone96@gmail.com",
  "alessandro.facone@libero.it"
];
var emailUtente = prompt("Inserisci la tua email: ");

document.getElementById('email').innerHTML = emailUtente;

if (listeEmail.includes(emailUtente)) {
  document.getElementById('risultato').innerHTML = "Puoi entrare, sei in lista";
} else{
  document.getElementById('risultato').innerHTML = "Mi dispiace, non sei in lista";
}
