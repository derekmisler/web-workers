import React from 'react'
import { Heading, Text, Box } from 'rebass/styled-components'

export const Card = ({ data, isLoading }) => (
  <Box
    my={3}
    boxShadow='large'
    border='10px solid'
    borderColor='blue'
  >
    <Box as='aside' p={3} bg='lightGray'>
      <Heading fontSize={3}>{data.productName}</Heading>
      <Text>
        {data.department}
        <br />
        {data.color}
       </Text>
    </Box>
    <Box as='footer' bg='red' p={3}>
      <Heading fontSize={3} color='gray'>${data.price}</Heading>
    </Box>
  </Box>
)
