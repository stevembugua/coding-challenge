const gradeInput = document.querySelector(".grade");
const calculateGradeButton = document.querySelector(".calcBtn");

calculateGradeButton.addEventListener("click", () => {
  calculateStudentGrade(parseInt(gradeInput.value, 10));
});

const calculateStudentGrade = (grade) => {
  if (!(grade < 0 || grade > 100)) {
    if (grade > 79 && grade <= 100) {
      alert("A");
    } else if (grade >= 60 && grade <= 79) {
      alert("B-");
    } else if (grade >= 49 && grade <= 59) {
      alert("C-");
    } else if (grade >= 40 && grade < 49) {
      alert("D-");
    } else if (grade < 40) {
      alert("E");
    }
  } else {
    alert("Invalid Grade. Enter a grade value between 0 and 100");
  }
};
