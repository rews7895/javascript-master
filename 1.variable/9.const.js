// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨

// 1. 상수
const MAX_FRUIT = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊'
};
// object 안에는 가능
orange.name = 'apple';

console.log(orange);
