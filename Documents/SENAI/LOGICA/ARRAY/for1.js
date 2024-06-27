const par = [];

const impar = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    impar.push(i);
  } else {
    par.push(i);
  }
}
console.log(par, impar);
