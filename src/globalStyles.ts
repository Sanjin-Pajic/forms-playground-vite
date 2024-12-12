import { createGlobalStyle } from 'styled-components'

// small hack to make Prettier work here.
const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url('src/assets/fonts/Inter-VariableFont_opsz,wght.ttf');
        font-weight: 400;
        font-style: normal;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter';
    }

    #app {
        max-width: 600px;
        margin: 0 auto;
    }
`

export default GlobalStyles
