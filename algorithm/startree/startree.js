/**
 * 별찍기 코드
 */

class StarMaker {
  constructor(loopNumber = 5, starCharacter = "*", blankCharacter = " ") {
    this.star = starCharacter;
    this.blank = blankCharacter;
    this.loop = loopNumber;
  }

  generateCharacters(loop = this.loop, char = this.star) {
    return char.repeat(loop);
  }

  printDivdeLine(length = 10) {
    const divideChar = this.generateCharacters(length, "=");
    console.log(divideChar);
  }

  question1() {
    const star = this.generateCharacters(this.loop, this.star);

    for (let i = 0; i < this.loop; i++) {
      console.log(star);
    }

    this.printDivdeLine(10);
  }

  question2() {
    let star;
    for (let i = 0; i < this.loop; i++) {
      star = this.generateCharacters(i + 1, this.star);
      console.log(star);
    }
    this.printDivdeLine(10);
  }

  question3() {
    let star;
    for (let i = 1; i <= this.loop; i++) {
      star = this.generateCharacters(i, this.star);
      console.log(star);
    }
    for (let j = this.loop - 1; j >= 1; j--) {
      star = this.generateCharacters(j, this.star);
      console.log(star);
    }
    this.printDivdeLine(10);
  }

  question4() {
    this.pyramidTree();
    this.printDivdeLine(10);
  }
  question5() {
    // Q4 를 이용해도 괜찮은가?
  }

  pyramidTree() {
    let star, blank;
    const maxCount = 2 * this.loop - 1;
    for (let i = 0; i < this.loop; i++) {
      const starCount = 2 * (i + 1) - 1;
      star = this.generateCharacters(starCount, this.star);
      blank = this.generateCharacters(
        Math.floor((maxCount - starCount) / 2),
        this.blank
      );
      const printTarget = blank + star + blank;
      console.log(printTarget);
    }
  }
  reversePyramidTree() {
    let star, blank;
    const maxStarCount = 2 * this.loop - 1;
    for (let i = this.loop - 1; i > 0; i--) {
      const starCount = (star = this.generateCharacters(starCount, this.star));
      blank = this.generateCharacters(
        Math.floor((maxStarCount - starCount) / 2),
        this.blank
      );
    }
  }
}

const starTree = new StarMaker(5);
starTree.question1();
starTree.question2();
starTree.question3();
starTree.question4();

console.log("END!");
