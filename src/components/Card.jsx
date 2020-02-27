import React from 'react'
import { Heading, Text, Box } from 'rebass/styled-components'

export const Card = ({ data, isLoading }) => (
  <Box
    boxShadow='large'
    border='10px solid'
    borderColor='blue'
    mx={2}
    my={3}
  >
    <Box as='aside' p={3} bg='gray'>
      <Heading fontSize={3}>{data.productName}</Heading>
      <Text fontWeight='bold'>Dept: {data.department}</Text>
      <Text>{data.product}</Text>
    </Box>
    <Box as='footer' bg='red' p={3}>
      <Heading fontSize={3} color='black'>${data.price}</Heading>
    </Box>
  </Box>
)
