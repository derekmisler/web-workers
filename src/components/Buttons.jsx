import React from 'react'
import styled from 'styled-components'
import { Button as RebassButton, Box, Flex, Text } from 'rebass/styled-components'

const Button = styled(RebassButton)`
  &:hover {
    box-shadow: ${({ theme }) => `0 0 2px 4px ${theme.colors.gray}`};
    cursor: pointer;
  }
`

export const Buttons = ({ sortWithWebWorker, sortNormally }) => (
  <Flex>
    <Box width={1 / 2} px={2}>
      <Button variant='primary' onClick={sortNormally}>
        <Text>Sort WITHOUT Web Worker</Text>
      </Button>
    </Box>
    <Box width={1 / 2} px={2}>
      <Button variant='secondary' onClick={sortWithWebWorker}>
        <Text>Sort WITH Web Worker</Text>
      </Button>
    </Box>
  </Flex>
)
