const prompt = require("prompt-sync")();

let face;
let casa = 1;
let i = 0;

while (true) {
  if (i == 0) {
    prompt.hide("Rode o dado ");
  }
  if (i > 0) {
    prompt.hide("Rode o dado novamente ");
  }
  i++;
  face = Math.random() * 20;
  face = Math.ceil(face);

  console.log("Você tirou o número " + face);

  if (face == 1) {
    casa--;
    prompt.hide(console.log("Você voltou uma casa, sua casa atual é " + casa));
  }
  if (face >= 2 && face < 12) {
    casa = casa + 0;
    prompt.hide(
      console.log("Você não andou nenhuma casa, sua casa atual é " + casa)
    );
  }
  if (face >= 12 && face < 20) {
    casa++;
    prompt.hide(console.log("Você andou uma casa, sua casa atual é " + casa));
  }
  if (face == 20) {
    casa = casa + 10;
    prompt.hide(console.log("Você andou dez casas, sua casa atual é " + casa));
  }
  if (casa >= 10) {
    console.log("Parabéns, você ganhou");
    console.log("Foram necessários " + i, "turnos para ganhar");
    break;
  }
}
