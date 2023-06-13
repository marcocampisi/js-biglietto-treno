const tariffaKm = 0.21;
const spanCosto = document.getElementById('costo');

alert('Benvenuto, inserisci la tua età e quanti KM devi percorrere.');
const age = parseInt(prompt("Età: "));
const userKm = parseFloat(prompt("KM: "));
let price = (tariffaKm * userKm).toFixed(2);

if (isNaN(userKm)) {
    alert('Inserisci un numero valido di KM')
} else {
    if (age < 18) {
    price *= .20;
    } else if (age >= 65) {
    price *= .40;
    }

    spanCosto.innerHTML = price + '€';
}
