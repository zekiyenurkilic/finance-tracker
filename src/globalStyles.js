import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primaryPurple: "#7232ff",
    primaryBlue: "#32355D",
    primaryWhite: "#fff",
    primaryBlack: "#000",
    primaryMainBg: "#f0f2f7",
    inputBgColor: "#f6f6f6",
    primaryBorderColor: "#ececec;",
    errorColor: "#d62c37",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 680,
    black: 900,
  },
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  * {
  font-family: 'Quicksand', sans-serif;
  box-sizing: border-box;
padding: 0;
margin: 0;
  }

  *::-webkit-scrollbar {
    width: 5px;
    background-color: #d2d2d2;
  }
  *::-webkit-scrollbar-thumb {
    background: #6c6c6c;
    transition: 0.5s;
  }

button {
    outline: none;
    border: 0;
}
`;
export default GlobalStyle;
