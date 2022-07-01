const inventory = require('./inventory.json')

const getInventoryObject = () => {
   return inventory.reduce((acc, current) => {
      if (!acc[current.itemType]) {
         acc[current.itemType] = []
      }

      const item = { ...current }
      delete item.itemType
      acc[current.itemType].push(item)

      return acc
   }, {})
}

module.exports = {
   getInventoryObject,
}
