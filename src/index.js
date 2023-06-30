import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);
