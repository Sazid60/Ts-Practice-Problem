// ## Problem 3:

// Create a TypeScript function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers from the original array.

// ```tsx
// // Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

// // Sample Output:
// [2, 4, 6]
// ```

const filterEvenNumbers = (x:number[]) :number[] =>{
    return x.filter(number => number % 2 === 0)
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));