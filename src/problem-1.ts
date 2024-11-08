// ## Problem 1:

// Design a TypeScript function `repeatString` that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

// ```tsx
// // Sample Input: 
// repeatString("Hello!", 3)

// // Sample Output:
// "Hello!Hello!Hello!"
// ```

const repeatString = (x: string,  y:number) :string =>{
    return x.repeat(y)
}

console.log(repeatString("Hello!", 3));