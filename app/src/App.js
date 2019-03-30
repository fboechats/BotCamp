import React, { Component } from "react";
import BtnBotcamp from "./Components/BtnBotcamp";
import LogoBotcamp from "./Components/LogoBotcamp";
import "./Components/BgBotcamp/style.css";

class App extends Component {
    render() {
        return (
        <>
        <LogoBotcamp />
        <BtnBotcamp />
        </>
        );
    };
}

export default App;