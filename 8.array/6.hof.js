const fruit = ['๐', '๐', '๐', '๐'];
for(let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

fruit.forEach((value, index, array) => console.log(index, value, array)); 

// ์กฐ๊ฑด์ ๋ง๋(์ฝ๋ฐฑํจ์) ์์ดํ์ ์ฐพ์ ๋
// find: ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ๋ฐํ
const item1 = {name: '๐', price: 2};
const item2 = {name: '๐ฅ', price: 3};
const item3 = {name: '๐ฅฎ', price: 1};
const products = [item1, item2, item3, item2];

let result = products.find((value) => value.name === '๐ฅฎ');
console.log(result);

result = products.findIndex((value) => value.name === '๐ฅฎ');
console.log(result);

// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ๋ถ๋ถ์ ์ผ๋ก ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
result = products.some((item) => item.name === '๐ฅ');
console.log(result);

// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ์ ๋ถ ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
result = products.every((item) => item.name === '๐ฅ');
console.log(result);

// ์กฐ๊ฑด์ ๋ง๋ ๋ชจ๋  ์์ดํ๋ค์ ์๋ก์ด ๋ฐฐ์ด๋ก
result = products.filter((item) => item.name === '๐ฅ');
console.log(result);

console.clear();

// Map ๋ฐฐ์ด์ ์์ดํ๋ค์ ๊ฐ๊ฐ ๋ค๋ฅธ ์์ดํ์ผ๋ก ๋งคํํ  ์ ์๋, ๋ณํํด์ ์๋ก์ด ๋ฐฐ์ด ์์ฑ
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if(item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: ์ค
result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);

// sort: ๋ฐฐ์ด์ ์์ดํ๋ค์ ์ ๋ ฌ
// ๋ฌธ์์ด ํํ์ ์ค๋ฆ์ฐจ์์ผ๋ก ์์๋ฅผ ์ ๋ ฌํ๊ณ , ๊ธฐ์กด์ ๋ฐฐ์ด์ ๋ณ๊ฒฝ
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce: ๋ฐฐ์ด์ ์์๋ค์ ์ ์ด์ ์ ์ด์ ๊ฐ์ ํ๋๋ก
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);