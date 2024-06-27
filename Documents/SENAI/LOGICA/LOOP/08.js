const prompt = require("prompt-sync")();

let n = prompt("Digite um número de sua escolha: ") * 1;

let contagem = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    contagem++;
  }
}
if (contagem == 2) {
  console.log(n + " é primo");
} else {
  console.log(n + " não é primo");
}
