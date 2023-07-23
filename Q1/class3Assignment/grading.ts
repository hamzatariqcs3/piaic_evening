// In this assignment we assume we have 4 subject 
// English, Urdu, Maths , Computer
// and each such having 100 Marks
// user can enter  0 to 100 marks
// 85 or above carry A+
// 80 to 84 A 
// 70 to 79 B+ 
// 65 to 69 B 
// 60 to 64 C+ 
// 55 to 59 C 
// 50 to 54 D 
// less this 50 mean fail 
const promptSync = require("prompt-sync")(); 
 
// Function to get subject marks from the user
function getSubjectMarks(subject: string): number {
  const input = promptSync(`Enter marks for ${subject}: `);
  const marks = parseInt(input || '0');
  return marks;
}

// Function to calculate grades based on marks
function calculateGrade(marks: number): string {
  if (marks >= 85) {
    return 'A+';
  } else if (marks >= 80) {
    return 'A';
  } else if (marks >= 70) {
    return 'B+';
  } else if (marks >= 65) {
    return 'B';
  } else if (marks >= 60) {
    return 'C+';
  } else if (marks >= 55) {
    return 'C';
  } else if (marks >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

// Main function to execute the grading system
function gradingSystem() {
  let grades: { [subject: string]: string } = {};
  let grade: string;

  let englishMarks = getSubjectMarks("English");
  grade = calculateGrade(englishMarks);
  grades['English'] = grade;

  let urduMarks = getSubjectMarks("Urdu");
  grade = calculateGrade(urduMarks);
  grades['Urdu'] = grade;

  let mathsMarks = getSubjectMarks("Maths");
  grade = calculateGrade(mathsMarks);
  grades['Maths'] = grade;

  let computerMarks = getSubjectMarks("Computer");
  grade = calculateGrade(computerMarks);
  grades['Computer'] = grade;

  console.log('----- GRADE REPORT -----');
  console.log(`English: ${grades['English']}`);
  console.log(`Urdu: ${grades['Urdu']}`);
  console.log(`Maths: ${grades['Maths']}`);
  console.log(`Computer: ${grades['Computer']}`);
  console.log('------------------------');
}

// Call the main gradingSystem function
gradingSystem();
