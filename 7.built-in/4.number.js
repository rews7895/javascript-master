const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);

if(num1 === Number.NaN) {

}

if(Number.isNaN(num1)) {
  
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString());

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));

// 0과 1사이에서  나타낼수 있는 가장 작은 숫자
console.log(Number.EPSILON); 

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));