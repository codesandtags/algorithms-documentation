const fs = require('fs')

const inventory = require('./inventory.json')
const exportFile = () => {
   const headers = Object.keys(inventory[0]).join(',')
   const data = inventory
      .map((item) => `${Object.values(item).join(',')}`)
      .join('\n')
   const csv = `${headers}\n${data}`

   fs.writeFileSync('inventory.csv', csv)
}

module.exports = {
   exportFile,
}
