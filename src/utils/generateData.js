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
