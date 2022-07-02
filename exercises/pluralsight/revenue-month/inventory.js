const transactions = require('./transactions.json')

/**
    Find all transactions from March 2021
    Calculate the revenue for that month
    Return the revenue amount as a number from calculateRevenue
 */
const calculateRevenue = () => {
   const transactionsFromMarch = transactions
      .filter((tx) => {
         const month = new Date(tx.transactionDate).getMonth()
         const year = new Date(tx.transactionDate).getFullYear()
         return month === 2 && year === 2021
      })
      .reduce((revenue, current) => {
         return revenue + current.amount
      }, 0)

   return transactionsFromMarch
}

module.exports = {
   calculateRevenue,
}
