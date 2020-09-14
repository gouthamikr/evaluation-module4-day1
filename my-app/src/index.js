import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthContextProvider from "./coding-1/Context/AuthContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>,
  rootElement
);
