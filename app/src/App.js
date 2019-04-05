import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from "./pages/Login/index.js";
import Chat from "./pages/Chat/index";

import  "./styles/reset.css";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/Chat" component={Chat} />
                </Switch>
            </ BrowserRouter>
        );
    };
}

export default App;