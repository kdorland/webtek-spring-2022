//En funktion der tager tre tal som input. Funktionen skal returnerer true hvis alle tallene til sammen er over 100, ellers false.

function tretal(a, b, c) {
  let sum = a + b + c;
  // Variant 1
  /*
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
  */

  // Variant 2
  return sum > 100;
}
console.log(tretal(1,2,300));
console.log(tretal(1,2,3));


//En funktion der tager en tekst som input, og returnerer teksten “Hejsa, navn”, hvor navn er lig med input.
//En funktion der tager to stykker tekst, og returnerer deres to forbogstaver sat sammen. Fx hvis input er “kat” og “hund”, skal return value være “kh”.
//En funktion der tager to input: et tal og en tekst. Funktionen skal afgøre om teksten er længere end tallet, og returnerer true eller false.