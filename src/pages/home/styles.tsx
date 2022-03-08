import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.section`
  font-family: 'Barlow';
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`

export const AppRoot = createGlobalStyle`
  html * {
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap');
    font-family: 'Barlow', sans-serif;
    outline: none;
    border: none;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100%;
    margin: 0;
  }

  #root {
    height: 100%;
  }
`

export const BgImg = styled.div`
  background-image: url('https://pxwall.com/wp-content/uploads/2018/03/4K-HD-Wallpapers-3840x2160.jpg');
  background-position: center center;
  background-repeat: no-repeat no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
`

export {}
