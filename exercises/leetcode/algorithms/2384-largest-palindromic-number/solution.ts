function largestPalindromic(num: string): string {
   const map = new Array(10).fill(0)

   for (let i = 0; i < num.length; i++) {
      map[parseInt(num[i])]++
   }

   let firstHalf = '',
      secondHalf = '',
      mid = ''

   for (let i = 0; i < map.length; i++) {
      if (map[i] % 2 === 1) mid = i.toString()
      const nums = i.toString().repeat(Math.floor(map[i] / 2))

      firstHalf = nums + firstHalf
      secondHalf += nums
   }

   if (parseInt(firstHalf) == 0) return !!mid ? mid : '0'
   else return firstHalf + mid + secondHalf
}
