import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

const Main = () => (
  <div>
    <App />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
