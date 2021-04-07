var numeroChilometri;
var prezzoPerChilometro = 0.210;
var eta;
var prezzoBiglietto;
var output;

var numeroChilometri = prompt("Quanti chilometri vuole percorrere?");
var eta = prompt("Indichi la sua età?");

prezzoBiglietto = prezzoPerChilometro * numeroChilometri;

if(eta < 18){
    prezzoBiglietto = 0.8 * prezzoBiglietto;
}

if(eta > 65){
    prezzoBiglietto = 0.6 * prezzoBiglietto
}

var prezzoBigliettoAlDecimale = prezzoBiglietto.toFixed(2);

output = "Il prezzo del suo biglietto è di: " + prezzoBigliettoAlDecimale + "€"

document.getElementById('output').innerHTML = output;

console.log(prezzoBigliettoAlDecimale);