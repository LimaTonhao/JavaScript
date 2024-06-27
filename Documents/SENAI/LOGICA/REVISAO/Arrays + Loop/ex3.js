let pares = [];

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    pares.push(i);
  }
}

console.log(pares);

for (let i = 0; i < pares.length; i++) {
  pares.splice(i, 1, pares[i] * 2);
}
console.log(pares);

let soma = 0;

for (let i = 0; i < pares.length; i++) {
  pares.splice(i, 1, pares[i] / 2);
  soma = soma + pares[i];
}
console.log(soma);

let maior = 0;
let menor = 0;

for (let i = 0; i < pares.length; i++) {
  if (i == 0) {
    maior = pares[i];
    menor = pares[i];
  } else if (pares[i] > maior) {
    maior = pares[i];
  } else if (pares[i] < menor) {
    menor = pares[i];
  }
}

console.log(maior, menor);
