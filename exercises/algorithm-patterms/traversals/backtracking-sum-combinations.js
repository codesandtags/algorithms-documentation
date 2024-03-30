/*
A simpler and educational example of backtracking is the Combination Sum problem. This problem asks to find all unique combinations in a collection of candidate numbers that sum up to a target number. The same number may be chosen from the candidates an unlimited number of times. It's a clear demonstration of how backtracking can explore multiple paths to find all possible solutions that meet a particular criterion.

Problem Statement
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be used as many times as you want. The solution set must not contain duplicate combinations.

Approach
The approach to solving the Combination Sum problem involves recursive backtracking:

1. Start with an empty combination.
2. Recurse with the target reduced by the current number, adding the current number to the combination each time it recurses.
3. Backtrack when the target becomes negative or exactly 0.
- If the target is 0, add the current combination to the solution list.
- Otherwise, backtrack by removing the last added number and trying the next candidate.


Explanation

- findCombinations Function:
- It recursively explores every combination starting from the current index i to the end of the candidates array.
- It reduces the target by the current candidate candidates[i] for each recursion, aiming to reach a target of 0, which signifies a valid combination.
- Backtracking occurs by removing the last element added to the current combination (current.pop()) before moving to the next candidate.
Trade-offs

Pros:
- Flexibility: Backtracking offers a straightforward way to explore all possible combinations and permutations, adjusting the solution path dynamically based on the success of intermediate steps.
- Simplicity in Handling Constraints: It naturally incorporates constraints and goals into the recursion and backtracking steps, making it easier to prune the search space.

Cons:
- Time Complexity: For problems with many potential combinations or a large target relative to the candidates, the algorithm's time complexity can grow significantly, making it inefficient for some cases.
- Space Complexity: The recursion stack depth and the space needed to store intermediate combinations can grow with the size of the input, impacting memory usage.
 */
function combinationSum(candidates, target) {
   let result = []
   findCombinations(candidates, 0, target, [], result)
   return result
}

function findCombinations(candidates, index, target, current, result) {
   if (target === 0) {
      result.push([...current])
      return
   }
   if (target < 0) {
      return
   }

   for (let i = index; i < candidates.length; i++) {
      current.push(candidates[i])
      findCombinations(candidates, i, target - candidates[i], current, result)
      current.pop() // backtrack
   }
}

// Example usage
const candidates = [2, 3, 6, 7]
const target = 7
console.log(combinationSum(candidates, target))
// Output: [[2,2,3],[7]]
