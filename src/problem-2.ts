// ## Problem 2:

// Design a TypeScript function `findLargestNumber` that takes an array of numbers and returns the largest number in the array.

// ```tsx
// // Sample Input:
// findLargestNumber([10, 5, 8, 20, 3])

// // Sample Output:
// 20

const findLargestNumber = (x:number[]):number =>{
    return Math.max(...x)
}

console.log(findLargestNumber([10, 5, 8, 20, 3]));