class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        max_heap = [-gift for gift in gifts]

        # Convert the list into a heap in-place. This operation ensures the list maintains heap properties.
        heapq.heapify(max_heap)

        # For each of the 'k' operations, select and process the pile with the most gifts.
        for _ in range(k):
            # Using heappop(), we retrieve and remove the smallest number. Since we've negated the numbers,
            # this effectively gives us the largest original number (i.e., the pile with the most gifts).
            current = -heapq.heappop(max_heap)

            # Calculate the number of gifts left after taking from the pile and push the negative
            # of that value into the heap.
            heapq.heappush(max_heap, -int(current ** 0.5))

        # Sum up the remaining gifts in all the piles. Since the values in the max_heap are negative,
        # we negate the sum to get the final positive total of remaining gifts.
        return -sum(max_heap)
