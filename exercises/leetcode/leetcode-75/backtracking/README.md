# Backtracking

Backtracking is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.

## Use Cases

Backtracking is used in a variety of problems, including:

-  The N-Queens problem
-  The Sudoku problem
-  The Knight's Tour problem
-  The Subset Sum problem
-  The Permutations problem
-  The Combinations problem
-  The Palindrome Partitioning problem
-  The Word Search problem
-  The Regular Expression Matching problem
-  The Letter Combinations of a Phone Number problem
-  The Generate Parentheses problem
-  The Combination Sum problem
-  The Restore IP Addresses problem
-  The Binary Watch problem
-  The Partition to K Equal Sum Subsets problem
-  The Word Break problem
-  The Unique Paths problem

## Backtracking Templates

### Python

```python
def backtrack(candidate):
    if find_solution(candidate):
        output(candidate)
        return

    for next_candidate in list_of_candidates:
        if is_valid(next_candidate):
            backtrack(next_candidate)
```

### JavaScript

```javascript
function backtrack(candidate) {
   if (findSolution(candidate)) {
      output(candidate)
      return
   }

   for (let nextCandidate of listOfCandidates) {
      if (isValid(nextCandidate)) {
         backtrack(nextCandidate)
      }
   }
}
```

## Concepts used in Backtracking

-  Recursion
-  Depth-First Search (DFS)

## Time Complexity

The time complexity of backtracking algorithms is generally exponential. The time complexity of a backtracking algorithm is determined by the number of possible solutions to the problem and the number of choices to be made at each step.

## Space Complexity

The space complexity of backtracking algorithms is generally linear. The space complexity of a backtracking algorithm is determined by the depth of the recursion stack.
