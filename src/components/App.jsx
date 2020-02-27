import React, { useState, useEffect } from 'react'
import { Normalize } from 'styled-normalize'
import { Grommet, Grid, Box } from 'grommet'
import { grommet } from 'grommet/themes'
import { generateUsers } from '../utils/generateUsers'
import { sortListDescending } from '../utils/sort'
import { sortingWorker } from '../utils/sortingWorker'
import WebWorker from '../utils/WebWorker'
import { Ball } from './Ball'
import { Buttons } from './Buttons'
import { User } from './User'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setIsLoading(true)
    generateUsers().then(users => {
      setUsers(users)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [users[0]])

  const worker = new WebWorker(sortingWorker)

  const sortWithWebWorker = () => {
    setIsLoading(true)
    worker.postMessage(users)
    worker.addEventListener('message', event => {
      const sortedList = event.data
      setUsers(sortedList)
    })
  }

  const sortNormally = () => {
    setIsLoading(true)
    const sortedList = sortListDescending(users)
    setUsers(sortedList)
  }

  return (
    <>
      <Normalize />
      <Grommet theme={grommet}>
        <Grid gap='large' margin='large' columns={['2fr', '1fr']}>
          <Box>
            <Buttons
              sortWithWebWorker={sortWithWebWorker}
              sortNormally={sortNormally}
              isLoading={isLoading}
            />
            {users.slice(0, 20).map(user => (
              <User key={user.id} user={user} isLoading={isLoading} />
            ))}
            <Box></Box>
            <Ball />
          </Box>
        </Grid>
      </Grommet>
    </>
  )
}

export default App
