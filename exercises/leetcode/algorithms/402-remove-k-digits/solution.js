function removeKdigits(num, k) {
   const nums = Array.from(num)
   const stack = []
   stack.push(nums[0])

   for (let i = 1; i < nums.length; i++) {
      while (k && stack.length > 0 && stack[stack.length - 1] > nums[i]) {
         k--
         stack.pop()
      }
      stack.push(nums[i])
   }

   while (stack.length && k--) {
      stack.pop()
   }

   const n = BigInt(stack.join(''))
   return n.toString()
}
