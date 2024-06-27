const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];

let A = 0;
let B = 0;

for (let y = 0; y < arr.length; y++) {
  let x = y;
  A = A + arr[x][y];
  B = B + arr[y][arr.length - 1 - y];
}

console.log("A soma da diagonal A é igual a", A);
console.log("A soma da diagonal B é igual a", B);
console.log("A diferença das diagonais A e B é igual a", A - B);
