// Returnerer en kopi af et array
function vendOm(array) {
  let nytArray = []; // Det nye array er tomt
  // Vi looper over alle gamle elementer
  for (let i = 0; i < array.length; i++) {
    // Indsæt et gammelt element i det nye array
    nytArray.push(array[i]);
  }
  return nytArray; // Returner det nye array
}

//console.log(copyArray([1,2,3,4,5]));
let array1 = [1, 2, 3, 4, 5];
let array2 = vendOm(array1);
console.log(array2); // Udskriver [5, 4, 3, 2, 1]
