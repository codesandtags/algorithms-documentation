# Techniques for coding interviews

This document describe when to use each technique and how to use it.

## Sliding Window

Sliding window is a technique that uses a window to iterate over a list or array. The window is a subset of the list or array. The window can be a fixed size or a variable size. The window can be a subset of the list or array or a subset of the subset.

### When to use it

-  The problem will involve a data structure that is ordered and iterable like an array or a string
-  You are looking for some subrange in that array/string, like a longest, shortest or target value.
-  There is an apparent naive or brute force solution that runs in O(N²), O(2^N) or some other large time complexity.
-  But the biggest giveaway is that the thing you are looking for is often some kind of optimal, like the longest sequence or shortest sequence of something that satisfies a given condition exactly.
