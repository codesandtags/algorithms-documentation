class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        min_price = float('inf')
        max_profit = 0

        for price in prices:
            min_price = min(price, min_price)
            max_profit = max(max_profit, price - min_price)

        return max_profit
