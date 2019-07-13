// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate
//  su il numero di parole totali

// definizione variabili
var censIn; //variabile d'appoggio
var paroleIns = [];
// variabile testo definito da censura
var sostword = "xxx";
// variabile testo inserito dall'utente
var textIn = prompt("inserisci testo da censurare");
// rendo il contenuto della variabile da stringa ad array
var textInarray = textIn.split(" ");

console.log(textIn);
console.log(textInarray);


// chiedo all'utente di inserire 5 parole da censurare
for (var i = 0; i < 5; i++) {
  censIns = prompt("inserisci parole da censurare nel testo");
  paroleIns.push(censIns);
}
console.log(paroleIns);
// definisco variabile contatore parole sostituite
var counter = 0;
// percorro per tutta la lunghezza l'array e se trova le parole da censurare
// le sostituisco con xxx

for (var j = 0; j < textInarray.length; j++) {
  if (paroleIns.includes(textInarray[j])) {
    textInarray[j] = sostword;
    // mando avanti il contatore
    counter++;
  }
}
console.log(textInarray);
console.log(counter);
