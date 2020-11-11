// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.

var numeroKm = parseInt(prompt("Quanti kilometri dovrai fare?"));
console.log(numeroKm);

var anni = parseInt(prompt("Quanti anni hai?"));
console.log(anni);

var prezzoSenzaSconto = numeroKm * 0.21;
console.log(prezzoSenzaSconto);

var prezzoFinale;

if(anni < 18){
  prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 20) / 100);
}
console.log(prezzoFinale);
