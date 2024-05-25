class Solution:
    def frequencySort(self, s: str) -> str:
        # Build the frequency map
        freq_map = Counter(s)

        # Build the max heap
        max_heap = [(-freq, char) for char, freq in freq_map.items()]
        heapq.heapify(max_heap)

        # Extract from max heap and build result
        res = []
        while max_heap:
            freq, char = heapq.heappop(max_heap)
            res.append(char * (-freq))

        return ''.join(res)
