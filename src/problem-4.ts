// ## Problem 4:

// Design a TypeScript function `reverseArray` that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

// ```tsx
// // Sample Input 1:
// reverseArray(["apple", "banana", "cherry"])

// // Sample Output 1:
// ["cherry", "banana", "apple"]

// // Sample Input 2:
// reverseArray([10, 20, 30])

// // Sample Output 2: 
// [30, 20, 10]
// ```


const reverseArray = <T>(x:T[]) : T[] =>{
return [...x].reverse()
}

console.log(reverseArray(["apple", "banana", "cherry"]));