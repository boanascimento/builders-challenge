import styled from 'styled-components'

enum EBreakPoints {
  mobile = 480,
  tablets = 768,
  laptops = 1024,
}

export const Content = styled.div`
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
    background-color: #a6b1ac;
    cursor: pointer;
  }
  @media screen and (min-width: ${EBreakPoints.tablets}) {
    flex-direction: column;
    background: red;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid #a6b1ac;
  border-bottom: 1px solid #a6b1ac;
  transition: 0.3s;

  @media screen and (min-width: ${EBreakPoints.tablets}) {
    flex-direction: column;
    background: red;
  }
`

export const ContentInfo = styled.div`
  text-align: center;
  padding: 1rem;
`

// Loading Paragraph
interface ITest {
  loading?: number
}
export const Text = styled.p<ITest>`
  border-radius: 1rem;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: ${(prop) => (prop.loading ? 'transparent' : '#a6b1ac')};
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: ${(prop) => (prop.loading ? '#92a0993d' : 'transparent')};
  overflow: hidden;
  display: block;

  &::after {
    display: ${(prop) => (prop.loading ? 'block' : 'none')};
    content: '';
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
    animation: ${(prop) => (prop.loading ? 'loading' : 'none')} 1s -0.45s ease-in-out
      infinite;
  }

  @keyframes loading {
    to {
      transition: transform 0.45s ease-in-out;
      transform: translate3d(1000%, 0, 0) rotate(35deg);
    }
  }
`
