const readLine = require("readline");
/**
 * 별찍기 코드
 */

class StarMaker {
  /**
   * @param {number} loopNumber - 패턴의 기준이 되는 숫자 (예: 5)
   * @param {string} starCharacter - 별로 사용할 문자 (기본: "*")
   * @param {string} blankCharacter - 공백으로 사용할 문자 (기본: " ")
   */
  constructor(loopNumber = 5, starCharacter = "*", blankCharacter = " ") {
    this.loop = loopNumber;
    this.star = starCharacter;
    this.blank = blankCharacter;
  }

  /**
   * 지정한 문자(char)를 count 만큼 반복한 문자열을 반환한다.
   * @param {number} count - 반복 횟수
   * @param {string} char - 반복할 문자
   * @returns {string}
   */
  generateCharacters(count, char) {
    return char.repeat(count);
  }

  /**
   * 구분선을 출력한다.
   * @param {number} [length=10] - 구분선에 사용할 문자의 길이
   */
  printDivideLine(length = 10) {
    process.stdout.write(this.generateCharacters(length, "="));
    this.printLineBreak();
  }

  printLineBreak() {
    process.stdout.write("\n");
  }
  /**
   * Q1. 정사각형 패턴을 출력한다.
   * 예) n = 5일 때
   *  *****
   *  *****
   *  *****
   *  *****
   *  *****
   */
  printSquare() {
    const line = this.generateCharacters(this.loop, this.star);
    for (let i = 0; i < this.loop; i++) {
      process.stdout.write(line);
      this.printLineBreak();
    }
    this.printDivideLine();
  }

  /**
   * Q2. 좌측 정렬 증가형 패턴을 출력한다.
   * 예) n = 5일 때
   *  *
   *  **
   *  ***
   *  ****
   *  *****
   */
  printLeftAlignedTriangle() {
    for (let i = 1; i <= this.loop; i++) {
      process.stdout.write(this.generateCharacters(i, this.star));
      this.printLineBreak();
    }
    this.printDivideLine();
  }

  /**
   * Q3. 상하 대칭(증가 후 감소) 패턴을 출력한다.
   * 예) n = 5일 때
   *  *
   *  **
   *  ***
   *  ****
   *  *****
   *  ****
   *  ***
   *  **
   *  *
   */
  printSymmetricTriangle() {
    // 상단: 1 ~ n까지 증가
    for (let i = 1; i <= this.loop; i++) {
      process.stdout.write(this.generateCharacters(i, this.star));
      this.printLineBreak();
    }
    // 하단: n-1 ~ 1까지 감소
    for (let i = this.loop - 1; i >= 1; i--) {
      process.stdout.write(this.generateCharacters(i, this.star));
      this.printLineBreak();
    }
    this.printDivideLine();
  }

  /**
   * Q4. 가운데 정렬된 피라미드 패턴을 출력한다.
   * 예) n = 5일 때
   *       *
   *      ***
   *     *****
   *    *******
   *   *********
   */
  printPyramid() {
    const maxStars = 2 * this.loop - 1;
    for (let i = 1; i <= this.loop; i++) {
      const starsCount = 2 * i - 1;
      const spacesCount = Math.floor((maxStars - starsCount) / 2);
      const line =
        this.generateCharacters(spacesCount, this.blank) +
        this.generateCharacters(starsCount, this.star) +
        this.generateCharacters(spacesCount, this.blank);
      process.stdout.write(line);
      this.printLineBreak();
    }
    this.printDivideLine();
  }

  /**
   * Q5. 상하 대칭의 다이아몬드 패턴을 출력한다.
   * 예) n = 5일 때
   *       *
   *      ***
   *     *****
   *    *******
   *   *********
   *    *******
   *     *****
   *      ***
   *       *
   *
   * 상단: Q4와 동일한 규칙 (1부터 n까지)
   * 하단: 중앙(n번째 줄) 이후부터는 대칭으로 2n - i를 current로 사용
   */
  printDiamond() {
    const totalRows = 2 * this.loop - 1;
    for (let i = 1; i <= totalRows; i++) {
      // 상단(i<=n)인 경우 current는 i, 하단(i>n)은 대칭 규칙에 따라 2n - i
      const current = i <= this.loop ? i : 2 * this.loop - i;
      const starsCount = 2 * current - 1;
      const spacesCount = this.loop - current;
      const line =
        this.generateCharacters(spacesCount, this.blank) +
        this.generateCharacters(starsCount, this.star) +
        this.generateCharacters(spacesCount, this.blank);
      process.stdout.write(line);
      this.printLineBreak();
    }
    this.printDivideLine();
  }
}

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 첫 번째 질문: 반복수를 입력받는다.
rl.question("반복수(숫자)를 입력하세요: ", (loopInput) => {
  const loopNumber = parseInt(loopInput, 10);
  if (isNaN(loopNumber) || loopNumber <= 0) {
    console.error("유효한 숫자를 입력하세요.");
    rl.close();
    return;
  }
  // 두 번째 질문: star 문자를 입력받는다.
  rl.question("star 문자를 입력하세요 (기본: '*'): ", (starInput) => {
    const starChar = starInput.trim() || "*";
    // 세 번째 질문: blank 문자를 입력받는다.
    rl.question("blank 문자를 입력하세요 (기본: ' '): ", (blankInput) => {
      const blankChar = blankInput.trim() || " ";

      // 입력받은 값을 사용해 StarMaker 인스턴스 생성
      const starMaker = new StarMaker(loopNumber, starChar, blankChar);
      const startTime = Date.now();

      process.stdout.write("\nQ1. 정사각형 패턴:\n");
      starMaker.printSquare();

      process.stdout.write("\nQ2. 좌측 정렬 삼각형:\n");
      starMaker.printLeftAlignedTriangle();

      process.stdout.write("\nQ3. 상하 대칭 삼각형:\n");
      starMaker.printSymmetricTriangle();

      process.stdout.write("\nQ4. 가운데 정렬 피라미드:\n");
      starMaker.printPyramid();

      process.stdout.write("\nQ5. 상하 대칭 다이아몬드:\n");
      starMaker.printDiamond();
      const endTime = Date.now();

      process.stdout.write(
        `Done Test During ${endTime - startTime} ms \n END!`
      );
      rl.close();
    });
  });
});
