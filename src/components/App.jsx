import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { Box, Flex } from 'rebass/styled-components'
import { ThreeBounce } from 'styled-spinkit'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/global'
import { generateData } from '../utils/generateData'
import { sortListDescending } from '../utils/sort'
import { sortingWorker } from '../utils/sortingWorker'
import WebWorker from '../utils/WebWorker'
import { Bounce } from './Bounce'
import { Buttons } from './Buttons'
import { Card } from './Card'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [dataSet, setDataSet] = useState([])

  useEffect(() => {
    setIsLoading(true)
    generateData().then(dataSet => {
      setDataSet(dataSet)
      setIsLoading(false)
    })
  }, [])

  const worker = new WebWorker(sortingWorker)

  const sortWithWebWorker = () => {
    setIsLoading(true)
    worker.postMessage(dataSet)
    worker.addEventListener('message', event => {
      setDataSet(event.data)
      setIsLoading(false)
    })
  }

  const sortNormally = () => {
    setIsLoading(true)
    const sortedList = sortListDescending(dataSet)
    setDataSet(sortedList)
    setIsLoading(false)
  }

  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Flex m={3}>
          <Box width={2 / 3}>
            <Buttons
              sortWithWebWorker={sortWithWebWorker}
              sortNormally={sortNormally}
              isLoading={isLoading}
            />
            <ThreeBounce color={isLoading ? '#eceff4' : 'transparent'}/>
            <Box
              sx={{
                display: 'grid',
                gridGap: 4,
                gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr) )'
              }}
            >
              {dataSet.slice(0, 40).map(data => (
                <Card key={data.id} data={data} isLoading={isLoading} />
              ))}
            </Box>
          </Box>
          <Box width={1 / 3}>
            <Bounce />
          </Box>
        </Flex>
      </ThemeProvider>
    </>
  )
}

export default App
