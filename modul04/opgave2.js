// Standard loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Lav et loop der udregner summen af alle ulige tal fra 1 til 100. Herefter skal koden printe summen. De enkelte tal skal ikke printes.
let sum = 0;
for (let i = 1; i < 100; i = i + 2) {
  sum = sum + i;
}
console.log(sum);

// Lav et loop der printer alle tal fra 80 til 40, dvs. i faldende orden.
for (let i = 80; i >= 40; i--) {
  console.log(i);
}
console.log(" ");
// Lav et loop der printer talrækken: 1 4 9 16 25
for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}
