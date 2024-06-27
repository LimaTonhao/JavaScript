let letras = ["a", "b", "c", "d", "e"];

for (let i = 0; i < letras.length; i++) {
  console.log(letras[i].toUpperCase());
}

console.log("    ");

for (let i = 0; i < letras.length; i++) {
  console.log(letras[i].toLowerCase());
}

console.log("    ");

for (let i = 0; i < letras.length; i++) {
  if (i % 2 == 0) {
    console.log(letras[i].toUpperCase());
  } else {
    console.log(letras[i].toLowerCase());
  }
}

console.log("    ");

for (let i = 0; i < letras.length; i++) {
  console.log(letras[i], i);
}

console.log("    ");

for (let i = 0; i < letras.length; i++) {
  console.log(letras[i], letras.length - 1 - i);
}
