// JavaScript is a single-threaded environment, meaning multiple scripts cannot run at the same time.
// For example, a site that needs to handle UI events, process large amounts of API data, and manipulate the DOM.
// All of that can't be simultaneous due to limitations in browsers' JavaScript runtime.
// Script execution happens within a single thread.

import faker from 'faker'

export const generateData = () => {
  const data = []

  for (let i = 0; i < 25000; i++) {
    data.push({
      id: faker.random.uuid(),
      price: faker.commerce.price(),
      productName: faker.commerce.productName(),
      department: faker.commerce.department(),
      product: faker.commerce.product()
    })
  }

  return Promise.resolve(data)
}
