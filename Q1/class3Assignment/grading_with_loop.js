"use strict";
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
const prompt_Sync = require("prompt-sync")();
// Function to get subject marks from the user
function get_Subject_Marks(subject) {
    const input = prompt_Sync(`Enter marks for ${subject}:`);
    const marks = parseInt(input || '0');
    return marks;
}
// Function to calculate grades based on marks
function calculate_Grade(marks) {
    if (marks >= 90) {
        return 'A+';
    }
    else if (marks >= 80) {
        return 'A';
    }
    else if (marks >= 70) {
        return 'B';
    }
    else if (marks >= 60) {
        return 'C';
    }
    else if (marks >= 50) {
        return 'D';
    }
    else {
        return 'F';
    }
}
// Main function to execute the grading system
function grading_System() {
    const subjects = ['English', 'Urdu', 'Maths', 'computer'];
    const grades = {};
    for (const subject of subjects) {
        const marks = get_Subject_Marks(subject);
        const grade = calculate_Grade(marks);
        grades[subject] = grade;
    }
    console.log('----- GRADE REPORT -----');
    for (const subject of subjects) {
        console.log(`${subject}: ${grades[subject]}`);
    }
    console.log('------------------------');
}
// Call the main gradingSystem function
grading_System();
