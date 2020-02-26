import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
      left: 0;
  }
  50% {
      left: calc(100% - 10rem)
  }
  100% {
      left: 0;
  }
`

export const Ball = styled.div`
  background: red;
  border-radius: 50%;
  position: fixed;
  top: 22%;
  left: 0;
  width: 10rem;
  height: 10rem;
  margin-top: -5rem;
  animation: ${bounce} 3s infinite;
`