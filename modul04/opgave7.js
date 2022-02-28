let input = process.argv[2]; // Input til programmet

/*
Hvis teksten indeholder “banankage”, skal output være “Det er lækkert”.
Hvis teksten er mere end 50 tegn, skal output være “Det var en lang tekst”.
Hvis teksten er mindre end 10 tegn, skal output være "Det var en kort tekst.
Og hvis ingen af kriterierne er opfyldt, skal output være “ok”.
*/

if (input.includes("banankage")) {
  console.log("Det er lækkert");
} else if (input.length > 50) {
  console.log("Det var en lang tekst");
} else if (input.length < 10) {
  console.log("Det var en kort tekst");
} else {
  console.log("ok");
}