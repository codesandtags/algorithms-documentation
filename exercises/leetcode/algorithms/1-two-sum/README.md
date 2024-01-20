## Problem: 1. Two Sum

## Category: Algorithms

## Difficulty: Easy

> https://leetcode.com/problems/two-sum/description/


## Approach

### 1. Brute Force

The brute force approach is simple. Loop through each element xx and find if there is another value that equals to target - xtarget−x.

#### Complexity Analysis

- Time complexity : O(n^2)O(n2). For each element, we try to find its complement by looping through the rest of array which takes O(n)O(n) time. Therefore, the time complexity is O(n^2)O(n2).

- Space complexity : O(1)O(1).

### 2. Two-pass Hash Table

To improve our run time complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to look up its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.

We reduce the look up time from O(n)O(n) to O(1)O(1) by trading space for speed. A hash table is built exactly for this purpose, it supports fast look up in near constant time. I say "near" because if a collision occurred, a look up could degenerate to O(n)O(n) time. But look up in hash table should be amortized O(1)O(1) time as long as the hash function was chosen carefully.

A simple implementation uses two iterations. In the first iteration, we add each element's value and its index to the table. Then, in the second iteration we check if each element's complement (target - nums[i]target−nums[i]) exists in the table. Beware that the complement must not be nums[i]nums[i] itself!