import React, { Component } from "react";

import BgBotcamp from "./Components/BgBotcamp";
import BtnBotcamp from "./Components/BtnBotcamp";
import LogoBotcamp from "./Components/LogoBotcamp";
import logo from "./img/logo.png"

class App extends Component {
    render() {
        return (
            <BgBotcamp>
                <LogoBotcamp src={logo} />
                <BtnBotcamp>Login</BtnBotcamp>
            </BgBotcamp>
        );
    };
}

export default App;