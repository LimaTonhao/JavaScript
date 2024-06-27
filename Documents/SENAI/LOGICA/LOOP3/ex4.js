const prompt = require("prompt-sync")();

let i = 1;

let n = prompt("Digite um número: ") * 1;

let contador = 0;

do {
  if (n % i == 0) {
    contador++;
  }
  i++;
} while (i <= n);

if (contador == 2) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}
