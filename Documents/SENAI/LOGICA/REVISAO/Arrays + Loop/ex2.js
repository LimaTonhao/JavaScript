let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  numbers.splice(i, 1, numbers[i] * 2);
}

console.log(numbers);

let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers.splice(i, 1, numbers[i] / 2);
  soma = soma + numbers[i];
}

console.log(soma);

let maior = 0;

for (let i = 0; i < numbers.length; i++) {
  if (i == 0) {
    maior = numbers[i];
  } else if (numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log(maior);

let menor = 0;

for (let i = 0; i < numbers.length; i++) {
  if (i == 0) {
    menor = numbers[i];
  } else if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor);
