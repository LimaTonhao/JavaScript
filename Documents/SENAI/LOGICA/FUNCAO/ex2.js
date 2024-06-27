const prompt = require("prompt-sync")();

function welcome(nome) {
  nome = prompt("Digite seu nome: ");
  console.log("Bem-vindo,", nome);
}

welcome();
