import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { store, StoreContext } from "./app/stores/store";

ReactDOM.render(
    <ChakraProvider>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </ChakraProvider> ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
