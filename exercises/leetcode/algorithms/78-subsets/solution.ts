function subsets(nums: number[]): number[][] {
   let output: number[][] = []
   let n = nums.length
   function backtrack(first = 0, k: number, curr: number[] = []) {
      // If the combination is done
      if (curr.length == k) {
         output.push([...curr])
         return
      }
      for (let i = first; i < n; i++) {
         // Add nums[i] into the current combination
         curr.push(nums[i])
         // Use the next integers to complete the combination
         backtrack(i + 1, k, curr)
         // Backtrack
         curr.pop()
      }
   }
   for (let k = 0; k < n + 1; k++) {
      backtrack(0, k)
   }
   return output
}
