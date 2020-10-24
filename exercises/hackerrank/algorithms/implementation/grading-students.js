function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38 || grade % 5 < 3) {
      return grade;
    }

    return Math.ceil(grade / 5) * 5;
  });
}
