import styled from 'styled-components'

export const Info = styled.div`
  width: 80%;
  height: 70%;
  min-height: 30rem;
  border-radius: 1rem;
  background: red;
  margin-top: 3rem;
  padding: 2rem;

  background-color: rgb(153 242 199 / 9%);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(50px);
  box-shadow: 7px 8px 30px 20px rgb(0 0 0 / 14%);

  color: #dae4df;
`

export const RefreshButton = styled.button`
  background-color: transparent;
  transition: 0.4s ease-out;
  color: #dae4df;
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`
