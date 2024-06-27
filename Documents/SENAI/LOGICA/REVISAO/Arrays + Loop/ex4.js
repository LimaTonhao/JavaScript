let impares = [];

for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) {
    impares.push(i);
  }
}

console.log(impares);

for (let i = 0; i < impares.length; i++) {
  impares[i] = impares[i] * 3;
}

console.log(impares);

let soma = 0;

for (let i = 0; i < impares.length; i++) {
  impares[i] = impares[i] / 3;
  soma = soma + impares[i];
}

console.log(soma);

let maior = 0;
let menor = 0;

for (let i = 0; i < impares.length; i++) {
  if (i == 0) {
    maior = impares[i];
    menor = impares[i];
  } else if (impares[i] > maior) {
    maior = impares[i];
  } else if (impares[i] < menor) {
    menor = impares[i];
  }
}

console.log(menor, maior);
