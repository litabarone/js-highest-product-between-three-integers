// Given a list of integers, returns the highest product between three.
function highestProduct(array) {
  // sort lowest to highest
  array.sort(function (a, b) {
    return a - b;
  });
  let len = array.length - 1;

  // 3 highest integers
  let product1 = array[len] * array[len - 1] * array[len - 2];

  // 2 lowest integers (possible negatives) * highest integer
  let product2 = array[0] * array[1] * array[len];

  // Return highest product
  return Math.max(product1, product2);
}

//Test
//highestProduct([1, 8, 2, 5, 6, 5, -9, -5]);
