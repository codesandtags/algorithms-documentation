/**
 * https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 */

function solution(A) {
  if (Array.isArray(A) && A.length < 1000000) {
    const pairs = new Map();
    for (const number of A) {
      if (pairs.has(number)) {
        pairs.get(number) ? pairs.set(number, false) : pairs.set(number, true);
      } else {
        pairs.set(number, false);
      }
    }

    for (const pair of pairs.entries()) {
      if (!pair[1]) {
        return pair[0];
      }
    }
  }

  return 0;
}

// solution([9,3,9,3,9,7,9]);
