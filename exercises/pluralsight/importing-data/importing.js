const inventory = require('./inventory.json')

const updateInventory = () => {
   const updates = require('./inventory_update.json')

   return inventory.map((item) => {
      const itemsToUpdate = updates.filter(
         (itemUpdate) => itemUpdate.id === item.id
      )

      if (itemsToUpdate) {
         const itemUpdated = itemsToUpdate.reduce((updated, current) => {
            return {
               ...updated,
               ...current,
            }
         }, item)
         return itemUpdated
      }

      return item
   })
}

module.exports = {
   updateInventory,
}
