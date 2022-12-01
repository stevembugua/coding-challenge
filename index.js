//accessing the html via class 
const gradeInput = document.querySelector(".grade");
const calculateGradeButton = document.querySelector(".calcBtn");
//adding an eventlistener 
calculateGradeButton.addEventListener("click", () => {
  calculateStudentGrade(parseInt(gradeInput.value, 10));
});

const calculateStudentGrade = (grade) => {
  //to make sure the grade does not go below 0 or higher than 100
  if (!(grade < 0 || grade > 100)) {
    //if grade is above 79 but less or equal to 100
    if (grade > 79 && grade <= 100) {
      alert("A");
     //if grade is greater or equal to 60 and less or equal to 79
    } else if (grade >= 60 && grade <= 79) {
      alert("B-");
     //if grade is greater or equal to 50 and less or equal to 59
    } else if (grade >= 50 && grade <= 59) {
      alert("C-");
    //if grade is greater or equal to 40 and less or equal to 49 
    } else if (grade >= 40 && grade <= 49) {
      alert("D-");
    //if grade is less than 40
    } else if (grade < 40) {
      alert("E");
    }
    //if none of the above exist then alert
  } else {
    alert("Invalid Grade. Enter a grade value between 0 and 100");
  }
};
