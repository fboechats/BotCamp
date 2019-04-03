import React, { Component } from "react";

import BgBotcamp from "./Components/BgBotcamp";
import BtnBotcamp from "./Components/BtnBotcamp";
import LogoBotcamp from "./Components/LogoBotcamp";


class App extends Component {
    render() {
        return (
            <BgBotcamp>
                <LogoBotcamp/>
                <BtnBotcamp>Login</BtnBotcamp>
            </BgBotcamp>
        );
    };
}

export default App;