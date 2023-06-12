const tariffaKm = 0.21;
const spanCosto = document.getElementById('costo');

alert('Benvenuto, inserisci la tua età e quanti KM devi percorrere.');
let age = parseFloat(prompt("Età: "));
let userKm = parseFloat(prompt("KM: "));
let price = (tariffaKm * userKm).toFixed(2);

if (age < 18) {
    spanCosto.innerHTML = (price) - (price * .20) + '€';
} else if (age > 65) {
    spanCosto.innerHTML = (price) - (price * .40) + '€';
} else {
    spanCosto.innerHTML = price + '€';
}