function studentGradeGenerator(grade) {
 if (grade > 79){
 return'A'
 } else if ( grade <= 79 && grade >= 60){
 return 'B'
 } else if (grade > 49 && grade <= 59){
    return 'C'
 } else if (grade > 40 && grade <= 49){
    return 'D'
 } 
 return 'E'   
}
function checkGrade(grade) {
   if (grade >= 0 && grade <= 100) {
       const marks = studentGradeGenerator(grade);
       console.log(`Grade: ${marks}`);
   } else {
       console.log("Please enter a valid mark between 0 and 100.");
   }
}
