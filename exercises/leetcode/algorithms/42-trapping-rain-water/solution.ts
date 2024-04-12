function trap(height: number[]): number {
   let left = 0,
      leftMax = 0
   let right = height.length - 1,
      rightMax = 0
   let waterTrapped = 0

   while (left < right) {
      if (height[left] < height[right]) {
         if (height[left] >= leftMax) {
            leftMax = height[left]
         } else {
            waterTrapped += leftMax - height[left]
         }
         left++
      } else {
         if (height[right] >= rightMax) {
            rightMax = height[right]
         } else {
            waterTrapped += rightMax - height[right]
         }
         right--
      }
   }

   return waterTrapped
}
