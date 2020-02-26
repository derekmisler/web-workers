import React from 'react'
import { Box, Header, Footer, Heading, Paragraph } from 'grommet'

export const User = ({ user }) => (
  <Box
    margin={{ vertical: 'medium', horizontal: 'large' }}
    elevation='large'
    border={{ color: 'neutral-3', size: 'xlarge' }}
  >
    <Header background='neutral-3' pad='medium'>
      <Heading level={2}>{user.name}</Heading>
    </Header>
    <Box as='aside' pad='medium' background='dark-2'>
      <Heading level={4}>{user.email}</Heading>
      <Paragraph>
        {user.address}
        <br />
        {user.citySt}
        <br />
        {user.joinedOn.toString()}
       </Paragraph>
    </Box>
    <Footer background='neutral-4' pad='medium'>
      <Paragraph>{user.commentCount} comments</Paragraph>
    </Footer>
  </Box>
)
