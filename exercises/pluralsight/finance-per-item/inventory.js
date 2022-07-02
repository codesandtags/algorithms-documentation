const inventory = require('./inventory.json')
const transactions = require('./transactions.json')

/**
    Return a single object
    Each key in the object is the itemType
    The value for each itemType is another object
    The total revenue for that item type, named revenue
    The total profit for that item type, named profit
 */
const financePerItem = () => {
   const financeObject = transactions.reduce((finance, currentTx) => {
      const item = inventory.find((item) => item.id === currentTx.itemId)
      const itemType = item.itemType
      if (!finance[itemType]) {
         finance[itemType] = {
            revenue: 0,
            profit: 0,
         }
      }

      finance[itemType].revenue += currentTx.amount
      finance[itemType].profit += currentTx.amount - item.cost

      return finance
   }, {})

   return financeObject
}

// kayak.revenue, expected 5281.17 but got 339.8

module.exports = {
   financePerItem,
}
