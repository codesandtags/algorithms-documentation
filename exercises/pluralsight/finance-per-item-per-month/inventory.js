const inventory = require('./inventory.json')
const transactions = require('./transactions.json')

/**
   Return an object where each itemType is a key
   Each object should contain a key for each month number (e.g 1 for January)
   The value for each month should be an object
   The revenue for that month & item type should be stored with a key named revenue
   The profi for that month & item type should be stored with a key named profit
   If an item does not have any transactions for a given month, then both profit and revenue should be 0.
 */
const financePerItemPerMonth = () => {
   const financeObject = transactions.reduce((finance, currentTx) => {
      const item = inventory.find((item) => item.id === currentTx.itemId)
      const itemType = item.itemType
      const date = new Date(currentTx.transactionDate)
      const month = date.getMonth() + 1

      if (!finance[itemType]) {
         finance[itemType] = {}
         for (let i = 1; i <= 12; i++) {
            finance[itemType][i] = {
               revenue: 0,
               profit: 0,
            }
         }
      }

      finance[itemType][month].revenue += currentTx.amount
      finance[itemType][month].profit += currentTx.amount - item.cost

      return finance
   }, {})

   return financeObject
}

module.exports = {
   financePerItemPerMonth,
}
