import faker from 'faker'

export const generateUsers = () => {
  const users = []

  for (let i = 0; i < 25000; i++) {
    users.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      joinedOn: faker.date.recent(),
      address: `${faker.address.streetAddress()} ${faker.address.streetName()} ${faker.address.streetPrefix()}, ${faker.address.secondaryAddress()}`,
      citySt: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      commentCount: faker.random.number()
    })
  }

  return Promise.resolve(users)
}
