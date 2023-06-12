const tariffaKm = 0.21;
const spanCosto = document.getElementById('#costo');

alert('Benvenuto, inserisci la tua età e quanti KM devi percorrere.')

let age = prompt("Età: ");
let userKm = prompt("KM: ");

if (age < 18) {
    spanCosto.innerHTML = (tariffaKm * userKm) - 20%;
}