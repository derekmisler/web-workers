import React from 'react'
import { Button, Box, Flex, Text } from 'rebass/styled-components'

export const Buttons = ({ sortWithWebWorker, sortNormally, isLoading }) => (
  <Flex>
    <Box width={1 / 2} px={2}>
      <Button variant='primary' disabled={isLoading} onClick={sortNormally}>
        <Text>Slow</Text>
      </Button>
    </Box>
    <Box width={1 / 2} px={2}>
      <Button variant='secondary' disabled={isLoading} onClick={sortWithWebWorker}>
        <Text>Fast</Text>
      </Button>
    </Box>
  </Flex>
)
