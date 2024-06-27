const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let soma = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let x = 0; x < matriz.length; x++) {
    soma = soma + matriz[i][x];
  }
}

console.log(soma);
