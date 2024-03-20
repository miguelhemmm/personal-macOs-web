import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
