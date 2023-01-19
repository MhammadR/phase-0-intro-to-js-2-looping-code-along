const sinon = "sinon";

function writeCards(arr, word) {
  const ar = [];
  for (let i = 0; i < arr.length; i++) {
    ar.push(`Thank you, ${arr[i]}, for the wonderful ${word} gift!`);
  }
  return ar;
}

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

