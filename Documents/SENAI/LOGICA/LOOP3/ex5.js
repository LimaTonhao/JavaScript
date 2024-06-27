let i = 1;
let soma = 0;

do {
  if (i % 2 != 0) {
    soma = soma + i;
  }
  i++;
} while (i <= 100);

console.log(soma);
