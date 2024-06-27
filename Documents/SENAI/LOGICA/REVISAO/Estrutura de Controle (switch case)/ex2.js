const prompt = require("prompt-sync")();

let episodios = prompt("Digite um episódio: ") * 1;

switch (true) {
  case episodios > 0 && episodios < 11:
    console.log("Série curta");
    break;
  case episodios > 10 && episodios < 101:
    console.log("Série média");
    break;
  case episodios > 100 && episodios < 1000:
    console.log("Série longa");
    break;
  case episodios >= 100:
    console.log("One Piece");
    break;
  default:
    console.log("Não existe");
}
