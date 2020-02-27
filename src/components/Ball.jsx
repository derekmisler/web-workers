import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    top: 8rem;
  }
  50% {
    top: calc(100% - 8rem)
  }
  100% {
    top: 8rem;
  }
`

export const Ball = styled.div`
  background: #A2423D;
  border-radius: 50%;
  position: fixed;
  top: 0;
  right: 1rem;
  width: 16rem;
  height: 16rem;
  margin-top: -8rem;
  animation: ${bounce} 3s infinite;
`