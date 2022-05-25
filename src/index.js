import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);
