import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
import * as theme from "./components/config/theme";
import Providers from "./contexts/Providers";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Providers>
        <App />
      </Providers>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
