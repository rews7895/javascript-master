const fruits = ['π', 'π', 'π', 'π'];

console.log(fruits[0]);
console.log(fruits[1]);

console.log(fruits.length);

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ
fruits[6] = 'π';

delete fruits[1];
console.log(fruits);