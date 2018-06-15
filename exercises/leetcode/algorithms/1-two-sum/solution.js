/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i=0; i < nums.length; i++) {
        const n = nums[i];
        if (map.has(target - n)) {
            return [ map.get(target - n), i ];
        }
        map.set(nums[i], i);
    }
};

twoSum([2, 7, 11, 15], 9);