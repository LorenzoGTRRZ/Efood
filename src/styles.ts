import { createGlobalStyle } from 'styled-components'

export const colors = {
  rosePink: '#E66767',
  palePeach: '#FFEBD9',
  white: '#FFFFFF',
  goldenYellow: '#FFB930',
  creamyWhite: '#FFF8F2'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${colors.creamyWhite};
    color:${colors.rosePink};
    font-family:Roboto, sans-serif;
    text-decoration: none;
    list-style-type: none;
  }
  .container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}

`
