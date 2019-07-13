// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate
//  su il numero di parole totali
var censIn;
var textIn = prompt("inserisci testo da censurare");
var textInarray = textIn.split(" ");
console.log(textIn);
console.log(textInarray);
var sostword = "xxx";
// var censIn = [prompt("inserisci parole da censurare nel testo")];
// console.log(censIn);
var paroleIns = [];
for (var i = 0; i < 2; i++) {
  censIns = prompt("inserisci parole da censurare nel testo");
  paroleIns.push(censIns);

}
for (var j = 0; j < textInarray.length; j++) {
  if (paroleIns.includes(textInarray[j])) {
    textInarray[j] = sostword;
  }
}
console.log(textInarray);
