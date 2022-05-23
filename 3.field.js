// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  // 필드
  #name;
  #emoji;
  #type = '과일';

  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  // 인스턴스 레벨의 메서드
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  }
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // 클래스 내부에서만 변경가능
console.log(apple);
// apple.display();

