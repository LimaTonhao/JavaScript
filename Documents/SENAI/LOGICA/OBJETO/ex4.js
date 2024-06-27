const dados = [
  {
    id: 1,
    nome: "Carlão Pedregulho",
  },
  {
    id: 2,
    nome: "Zezin Pão de forma",
  },
  {
    id: 3,
    nome: "Taccafaka Nopesh",
  },
];

for (let i = 0; i < dados.length; i++) {
  switch (dados[i].id) {
    case 1:
      console.log("Minerador");
      break;
    case 2:
      console.log("Padeiro");
      break;
    case 3:
      console.log("Peixeiro");
  }
}
