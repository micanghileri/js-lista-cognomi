// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
// Consigli del giorno:
// 1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.

var utenteC = prompt('Qual è il tuo cognome?');
capsCognomi = utenteC.charAt(0).toUpperCase();
smallCognomi = utenteC.slice(1).toLowerCase();
var utenteC = capsCognomi + smallCognomi;

var cognomi = [
    'Bianchi',
    'Rossi',
    'Duzioni',
    'Balsano',
    'Verdi',
    'Gialli',
    'Azzurri',
    'Blu'
];

cognomi.push(utenteC);
cognomi.sort();
var i = 0;

while (i<cognomi.length) {
    if (utenteC === cognomi[i]){
        alert(cognomi[i] + (': Il tuo cognome è in ' + (i+1) + ' posizione su un totale di' + ' ' + (cognomi.length) + ' cognomi'));
    } else {
        console.log(cognomi[i]);
    }
i++
}
