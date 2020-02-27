import React from 'react'
import { Box, Header, Footer, Heading, Text } from 'grommet'

export const User = ({ user, isLoading }) => (
  <Box
    margin='small'
    elevation='large'
    border={{ color: 'neutral-3', size: 'xlarge' }}
  >
    <Header background='neutral-3' pad='medium'>
      <Heading level={2}>{user.name}</Heading>
    </Header>
    <Box as='aside' pad='medium' background={{ color: 'dark-2', opacity: isLoading }}>
      <Heading level={4}>{user.email}</Heading>
      <Text>
        {user.address}
        <br />
        {user.citySt}
        <br />
        {user.joinedOn.toString()}
       </Text>
    </Box>
    <Footer background='neutral-4' pad='medium'>
      <Text>{user.commentCount} comments</Text>
    </Footer>
  </Box>
)
