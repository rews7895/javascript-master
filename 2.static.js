class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// // apple은 Fruit 클래스의 인스턴스이다.
// const apple = new Fruit('apple', '🍎');
// const orange = new Fruit('orange', '🍊');

// console.log(apple);
// console.log(orange);
// orange.display();

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
console.log(Fruit);

Math.pow();
console.log(Number.isFinite(1));