let strings = ["a", "b", "c", "d"];

let i = 0;

for (i; i < strings.length; i++) {
  console.log(strings[i]);
}

while (i < strings.length) {
  console.log(strings[i]);
  i++;
}

do {
  console.log(strings[i]);
  i++;
} while (i < strings.length);
