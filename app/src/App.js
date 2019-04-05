import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
>>>>>>> master

import Login from "./pages/Login/index.js";
import Chat from "./pages/Chat/index";

import  "./styles/reset.css";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
<<<<<<< HEAD
                <Login />
=======
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/Chat" component={Chat} />
                </Switch>
>>>>>>> master
            </ BrowserRouter>
        );
    };
}

export default App;