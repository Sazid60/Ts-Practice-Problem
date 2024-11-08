// ## Problem 5:

// You are given an object called “student”  representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called `calculateAverageGrade` that takes this student object as input and calculates the average grade.

// > Hints: Use a `reduce()` method to sum the grades. average = total grades/ total length
// > 

// ```tsx
// // Sample Input:
// const student1: Student = {     
// 			    name: "Bob",     
// 			    age: 17,     
// 			    grades: [75, 80, 82, 88, 90]
//                        };


// const averageGradeForBob = calculateAverageGrade(student1);

// // Sample Output:
// 83
// ```

interface Student {
    name: string;
    age: number;
    grades: number[];
}

const calculateAverageGrade = (student: Student): number => {
    const totalGrades = student.grades.reduce((acc, grade) => acc + grade, 0); // Sum up the grades
    return totalGrades / student.grades.length; // Calculate average
}

const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};

const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob); // Output: 83
