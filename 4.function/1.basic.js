function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

const result = add(1, 2);
console.log(result);

// let lastName = '김';
// let firstName = '지수';
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}

let firstName = '박';
let lastName = '지성';
console.log(fullName(firstName, lastName));