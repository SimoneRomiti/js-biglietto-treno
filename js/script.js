// INPUT KILOMETRI
var numeroKm = parseInt(prompt("Quanti kilometri dovrai fare?"));
// CONTROLLO KILOMETRI
while(numeroKm <= 0 || isNaN(numeroKm)) {
  numeroKm = parseInt(prompt("Il numero dei Kilometri deve essere un numero maggiore di 0, inserisci il numero corretto dei kilometri"));
}
console.log(numeroKm);

// INPUT ETA'
var anni = parseInt(prompt("Quanti anni hai?"));
// CONTROLLO ETA'
while(anni <= 0 || isNaN(anni)) {
  anni = parseInt(prompt("L'età deve essere un numero maggiore di zero, inserisci correttamente la tua età"))
}
console.log(anni);

// PREZZO SENZA SCONTO
var prezzoSenzaSconto = numeroKm * 0.21;
console.log(prezzoSenzaSconto);

// PREZZO CON SCONTI VARI
var prezzoFinale;

if(anni < 18) {
  prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 20) / 100);
} else if(anni > 65) {
  prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 40) / 100);
} else {
  prezzoFinale = prezzoSenzaSconto;
}
console.log(prezzoFinale);

// STAMPA A VIDEO RISULTATO
document.getElementById('text').innerHTML = "Il prezzo del tuo biglietto è: ";

document.getElementById('number').innerHTML = prezzoFinale.toFixed(2) + "€";
