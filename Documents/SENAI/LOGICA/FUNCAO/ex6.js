const prompt = require("prompt-sync")();

function random(x) {
  x = Number(
    prompt("Digite um número para ser o valor máximo de aleatoriedade: ")
  );
  let result = 0;
  for (let i = 0; result < x; i++) {
    result = Math.ceil(x * Math.random());
    console.log("O valor randômico foi", result);
    if (result == x) {
      return result;
    }
  }
}

console.log("Com o valor", random(), "o ciclo de aleatoriedade chegou ao fim");
