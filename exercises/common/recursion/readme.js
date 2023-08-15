// Recursion
// Recursion is a technique for iterating over an operation by having a function call itself 
// repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, 
// and in some functional languages this approach to looping is the default. 
//
// However, recursion can also be a good tool for solving problems even when iterative 
// solutions are also possible.
//
// Steps to solve a problem recursively:
// 1. Identify the base case(s)
// 2. Identify the recursive case(s)
// 3. Return where appropriate
// 4. Write procedures for each case that bring you closer to the base case(s)
// 5. Test your solution
//

// Example 1: Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence.
// Your program should take a number as input. That number should be the number of sheep you have.
// The function should display the number along with the message "Another sheep jumps over the fence"
// until no more sheep are left.
// Input: 3
// Output:
// 3 - Another sheep jumps over the fence
// 2 - Another sheep jumps over the fence
// 1 - Another sheep jumps over the fence
// All sheep jumped over the fence
//
// Base case: 0 sheep
// Recursive case: n sheep
// Return: string
// Procedure: print n, call function with n - 1
// Test: 3, 2, 1, 0
function countSheep(n) {
  if (n === 0) {
    return 'All sheep jumped over the fence';
  }
  return `${n} - Another sheep jumps over the fence\n${countSheep(n - 1)}`;
}