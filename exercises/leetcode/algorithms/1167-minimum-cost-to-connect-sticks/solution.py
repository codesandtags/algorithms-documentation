class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        # Convert the sticks list into a min-heap
        heapq.heapify(sticks)
        cost = 0

        # Continue until there's only one stick left
        while len(sticks) > 1:
            first = heapq.heappop(sticks)   # Get the smallest stick
            second = heapq.heappop(sticks)  # Get the second smallest stick

            # Combine the two sticks
            combined = first + second
            cost += combined

            # Add the combined stick back into the min-heap
            heapq.heappush(sticks, combined)

        return cost