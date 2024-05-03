function compareVersion(version1: string, version2: string): number {
   const nums1 = version1.split('.').map(Number)
   const nums2 = version2.split('.').map(Number)
   const longest = Math.max(nums1.length, nums2.length)

   for (let index = 0; index < longest; index++) {
      const v1 = nums1[index] || 0
      const v2 = nums2[index] || 0

      if (v1 !== v2) {
         return v1 > v2 ? 1 : -1
      }
   }

   return 0
}
