// Iterable: 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 것을 알 수 있음
// for..of, spread와 같은 것들을 사용할 수 있음.
const array = [1, 2, 3];
for(const item of array.values()) {
  console.log(item);
}
for(const item of array.keys()) {
  console.log(item);
}
for(const item of array.entries()) {
  console.log(item);
}

const obj = {0: 1, 1: 2};
// !in은 가능! -> key를 출력
for(const item in obj) {
  console.log(item);
}

const iterator = array.values();
while(true) {
  const item = iterator.next();
  if(item.done) break;
  console.log(item.value);
}
