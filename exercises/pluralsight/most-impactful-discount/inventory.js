const inventory = require('./inventory.json')
const transactions = require('./transactions.json')

/**
   Return a single object
   The key discountCode is the name of the most common discount code
   The key lossItems is an array of ids
   The ids are the ids of the items that sold for a loss using the most common discount code
 */
const lossItems = () => {
   const summedDiscountCodes = transactions
      .filter((tx) => tx.discountCode)
      .reduce((discountCodes, currentTx) => {
         if (!discountCodes[currentTx.discountCode]) {
            discountCodes[currentTx.discountCode] = 0
         }
         discountCodes[currentTx.discountCode]++
         return discountCodes
      }, {})

   let max = 0
   let discountCode = ''

   Object.keys(summedDiscountCodes).forEach((key) => {
      if (summedDiscountCodes[key] > max) {
         max = summedDiscountCodes[key]
         discountCode = key
      }
   })

   const lossItems = transactions
      .filter((tx) => {
         const item = inventory.find((item) => item.id === tx.itemId)
         return tx.discountCode === discountCode && tx.amount - item.cost < 0
      })
      .map((tx) => tx.itemId)

   return {
      discountCode,
      lossItems,
   }
}

module.exports = {
   lossItems,
}
