function topKFrequent(nums: number[], k: number): number[] {
    const freq: { [key: number]: number } = {};
    for (const n of nums) {
        if (freq[n] === undefined) freq[n] = 0;
        freq[n] += 1;
    }
    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(v => Number(v[0]));
};