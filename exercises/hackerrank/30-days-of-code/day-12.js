class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  constructor(firstName, lastName, id, testScores) {
    super(firstName, lastName, id);
    this.testScores = testScores;
  }

  getAverage() {
    const sumScores = this.testScores.reduce((total, current) => {
      return total + current;
    }, 0);

    return sumScores / this.testScores.length;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  calculate() {
    let avg = parseInt(this.getAverage());

    if (avg >= 90 && avg <= 100) {
      return "O";
    } else if (avg >= 80 && avg < 90) {
      return "E";
    } else if (avg >= 70 && avg < 80) {
      return "A";
    } else if (avg >= 55 && avg < 70) {
      return "P";
    } else if (avg >= 40 && avg < 55) {
      return "D";
    } else {
      return "T";
    }
  }
}
