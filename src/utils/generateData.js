import faker from 'faker'

export const generateData = () => {
  const data = []

  for (let i = 0; i < 30000; i++) {
    data.push({
      id: faker.random.uuid(),
      image: faker.image.imageUrl(),
      price: faker.commerce.price(),
      productName: faker.commerce.productName(),
      department: faker.commerce.department(),
      color: faker.commerce.color()
    })
  }

  return Promise.resolve(data)
}
