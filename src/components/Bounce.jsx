import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    top: 5rem;
  }
  50% {
    top: calc(100% - 5rem)
  }
  100% {
    top: 5rem;
  }
`

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 33%;
  background: #0f4c81;
`

const Square = styled.div`
  background: #6c567b;
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  margin-top: -5rem;
  animation: ${bounce} 3s infinite;
`

export const Bounce = () => (
  <Container><Square /></Container>
)