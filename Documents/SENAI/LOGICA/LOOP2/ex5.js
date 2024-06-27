const prompt = require("prompt-sync")();

const user = "rogerindograu";
const senha = "rogerio12!";

while (true) {
  let u = prompt("Digite o usuário: ");
  let s = prompt("Digite a senha: ");
  if (u == user && s == senha) {
    console.log("Login realizado");
    break;
  } else if (u != user || s != senha) {
    console.log("Dados incorretos");
  }
}
