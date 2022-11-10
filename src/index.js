import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./redux/config/configStore";
import App from "./App";

const theme = {
  BLACK: "#232323",
  GREY: "#D9D9D9",
  RED: "#E80000",
  DEEP_BLUE: "#020080",
  WHITE: "#FFFFFF",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
