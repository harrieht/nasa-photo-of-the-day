import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";




export default {
    primaryColor: "navyblue",
    secondaryColor: "crimson",
    tertiaryColor: "green",
    black: "black",
    white: "white",
    breakpointMobile: "(max-width: 550px"
}
ReactDOM.render(<App />, document.getElementById("root"));
