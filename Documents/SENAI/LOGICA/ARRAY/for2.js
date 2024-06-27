const strings = [];

const numbers = [];

const arr = [
  "Kairi",
  24,
  "Henrik",
  35,
  8,
  102,
  "Makenna",
  "Armani",
  7,
  "Zole",
  64,
  2,
  4,
  "Nathanael",
  "Elina",
  5,
  "Grady",
  32,
  1,
  "Cora",
  23,
  "Jayce",
  5,
  "Mya",
  55,
  "Bjorn",
  40,
];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr.at(i) === typeof "") {
    strings.push(arr[i]);
  } else if (typeof arr.at(i) === typeof 1) {
    numbers.push(arr[i]);
  }
}

console.log(strings, numbers);
