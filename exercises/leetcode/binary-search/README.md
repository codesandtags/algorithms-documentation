## Problem: 278. First Bad Version

## Category: Binary Search

## Difficulty: Easy

> https://leetcode.com/problems/first-bad-version/description/

## Approach

### 1. Binary Search

The binary search approach works given the versions for the API are sorted, so we can halve the search space on each iteration.

#### Complexity Analysis

- Time complexity : O(log n). The search space is halved on each iteration, so the time complexity is O(log n).
- Space complexity : O(1).
