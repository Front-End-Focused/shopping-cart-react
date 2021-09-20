import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const AppContext = React.createContext();

ReactDOM.render(<App />, document.getElementById("root"));
