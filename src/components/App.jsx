import React, { useState, useEffect } from 'react'
import { Normalize } from 'styled-normalize'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { generateUsers } from '../utils/generateUsers'
import { sortListDescending } from '../utils/sort'
import { sortingWorker } from '../utils/sortingWorker'
import WebWorker from '../utils/WebWorker'
import { Ball } from './Ball'
import { Body } from './Body'
import { Buttons } from './Buttons'
import { Loading } from './Loading'
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

  const worker = new WebWorker(sortingWorker)

  const sortWithWebWorker = () => {
    setIsLoading(true)
    worker.postMessage(users)
    worker.addEventListener('message', event => {
      const sortedList = event.data
      setUsers(sortedList)
      setIsLoading(false)
    })
  }

  const sortNormally = () => {
    setIsLoading(true)
    const sortedList = sortListDescending(users)
    setUsers(sortedList)
    setIsLoading(false)
  }

  return (
    <>
      <Normalize />
      <Grommet theme={grommet}>
        <Body>
          <Buttons
            sortWithWebWorker={sortWithWebWorker}
            sortNormally={sortNormally}
            isLoading={isLoading}
          />
          <Ball />
          {isLoading && <Loading />}
          {users.slice(0, 20).map(user => (
            <User key={user.id} user={user} isLoading={isLoading} />
          ))}
        </Body>
      </Grommet>
    </>
  )
}

export default App
