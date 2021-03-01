// Esercizio Gioco Dadi
var nomePlayer1 = prompt("Inserisci il nome del primo giocatore: ");
var nomePlayer2 = prompt("Inserisci il nome del secondo giocatore: ");

var fichesPlayer = prompt("Quante fiches volete giocare?");

document.getElementById('nomePlayer1').innerHTML = nomePlayer1;
document.getElementById('nomePlayer2').innerHTML = nomePlayer2;

document.getElementById('fichesPlayer1').innerHTML = fichesPlayer + " fiches";
document.getElementById('fichesPlayer2').innerHTML = fichesPlayer + " fiches";

var numPlayer1 = Math.floor(Math.random() * 6) + 1;
var numPlayer2 = Math.floor(Math.random() * 6) + 1;

document.getElementById('numPlayer1').innerHTML = numPlayer1;
document.getElementById('numPlayer2').innerHTML = numPlayer2;

var fichesTot = fichesPlayer * 2;

if (numPlayer1 > numPlayer2) {
  document.getElementById('risultatoPlayer1').innerHTML = "Hai vinto " + fichesTot + " fiches!";
  document.getElementById('risultatoPlayer2').innerHTML = "Hai perso " + fichesPlayer + " fiches!";
} else if (numPlayer1 < numPlayer2) {
  document.getElementById('risultatoPlayer2').innerHTML = "Hai vinto " + fichesTot + " fiches!";
  document.getElementById('risultatoPlayer1').innerHTML = "Hai perso " + fichesPlayer + " fiches!";
} else {
  document.getElementById('risultatoPlayer1').innerHTML = "E' patta!";
  document.getElementById('risultatoPlayer2').innerHTML = "E' patta!";
}
