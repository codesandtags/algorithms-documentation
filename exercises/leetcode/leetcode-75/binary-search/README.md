# Binary Searh

Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

## Use Cases

Binary search is used in a variety of problems, including:

-  The Search in Rotated Sorted Array problem
-  The Search in Rotated Sorted Array II problem
-  The Find Minimum in Rotated Sorted Array problem
-  The Find Peak Element problem
-  The Search for a Range problem
-  The Search Insert Position problem
-  The Search a 2D Matrix problem
-  The Search a 2D Matrix II problem
-  The Find First and Last Position of Element in Sorted Array problem
-  The Find K Closest Elements problem

## Implementation

```python
def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

```javascript
function binarySearch(nums, target) {
   let left = 0
   let right = nums.length - 1
   while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[mid] === target) {
         return mid
      } else if (nums[mid] < target) {
         left = mid + 1
      } else {
         right = mid - 1
      }
   }
   return -1
}
```

## Complexity

The time complexity of the binary search algorithm is O(log n).
The space complexity of the binary search algorithm is O(1).
