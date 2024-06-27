const pessoa = {
  nome: "Limamei",
  idade: 18,
  profissao: "Vagabundo",
  pais: "Coreia do Norte",
};

console.log(pessoa.nome, pessoa.idade);

pessoa.profissao = "Vendedor da Shopee";
pessoa.email = "limameiallday@gmail.com";

delete pessoa.pais;

console.log(pessoa);
