const faker = require('faker')
const fs = require('fs')
const users = []
for (let start = 1; start <= 100000; start++) {
   let user = {
      id: start,
      email: `${faker.internet.email()}`,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
   }
   users.push(user)
}
fs.writeFileSync('./users.json', `{"users":${JSON.stringify(users)}}`)
