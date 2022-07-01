// Find all items that have an itemType of boot
// Return an array that only has items that are boot
const inventory = require('./inventory.json')

const getBoots = () => {
   return inventory.filter((item) => item.itemType === 'boot')
}

module.exports = {
   getBoots,
}
