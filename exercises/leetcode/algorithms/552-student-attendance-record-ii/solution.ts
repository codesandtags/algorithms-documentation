function checkRecord(n: number): number {
   const MOD = 1e9 + 7
   let cnt = [1, 1, 0, 1, 0, 0]
   for (let i = 1; i < n; i++)
      cnt = [
         (cnt[0] + cnt[1] + cnt[2]) % MOD,
         cnt[0],
         cnt[1],
         (cnt[0] + cnt[1] + cnt[2] + cnt[3] + cnt[4] + cnt[5]) % MOD,
         cnt[3],
         cnt[4],
      ]
   return (cnt[0] + cnt[1] + cnt[2] + cnt[3] + cnt[4] + cnt[5]) % MOD
}
