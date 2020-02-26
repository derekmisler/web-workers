import React from 'react'
import { Box, Main, Heading, Header } from 'grommet'

export const Body = ({ children }) => (
  <Main>
    <Header pad='large'>
      <Heading>Web Worker Demo</Heading>
    </Header>
    <Box pad={{ vertical: 'large' }}>{children}</Box>
  </Main>
)
