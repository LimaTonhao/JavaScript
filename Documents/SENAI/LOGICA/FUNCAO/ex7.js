function arr(x) {
  let soma = 0;
  for (let i = 0; i < x.at(-1); i++) {
    soma = soma + x[i];
  }
  return soma;
}

console.log(
  "A soma dos valores da array é",
  arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
