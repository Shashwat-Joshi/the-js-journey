const numbers = [1, 2, 3, 4, 1];

let count = 0;

try {
  count = countOccurrences(numbers, 1);
} catch (e) {
  alert(e);
}
console.log(count);

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array !");
  }

  let occurrence;
  return array.reduce((accumulator, current) => {
    occurrence = current == searchElement ? 1 : 0;
    return accumulator + occurrence;
  });
}
