/**
 * https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 */

function solution(numbers, times) {
  if (numbers.length === 0 || times === 0) {
    return numbers;
  }

  // Solution using mutation
  for (let i = 0; i < times; i++) {
    numbers.unshift(numbers.pop());
  }

  return numbers;
}
