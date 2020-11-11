// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.

var numeroKm = parseInt(prompt("Quanti kilometri dovrai fare?"));

while(numeroKm < 0) {
  numeroKm = parseInt(prompt("Il numero dei Kilometri non può essere negativo, inserisci il numero corretto dei kilometri"));
}
console.log(numeroKm);

var anni = parseInt(prompt("Quanti anni hai?"));

while(isNaN(anni)) {
  anni = parseInt(prompt("L'età va scritta in numeri non in lettere, scrivi la tua età in numeri"))
}
console.log(anni);

var prezzoSenzaSconto = numeroKm * 0.21;
console.log(prezzoSenzaSconto);

var prezzoFinale;

if(anni < 18) {
  prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 20) / 100);
} else if(anni > 65) {
  prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 40) / 100);
} else {
  prezzoFinale = prezzoSenzaSconto;
}
console.log(prezzoFinale);

document.getElementById('price').innerHTML = "Il prezzo del tuo biglietto è: " + prezzoFinale.toFixed(2) + "€"
