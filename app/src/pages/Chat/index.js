import React, { Component } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../Components/BotcampWrapper";
import Header from "../../Components/HeaderBotcamp";
import LogoBotcamp from "../../Components/LogoBotcamp";
import ExitBotcamp from "../../Components/ExitBotcamp";
import InputBotcamp from "../../Components/InputBotcamp";
import Footer from "../../Components/FooterBotcamp";
import UserMessageBotcamp from "../../Components/UserMessageBotcamp";
import BotMessage from "../../Components/BotMessage";

export default class Chat extends Component {
  state = {
    inputMessage: "",
    userMessages: []
  };

  handleInput = event => {
    event.preventDefault();

    this.setState({
      userMessages: [...this.state.userMessages, this.state.inputMessage],
      inputMessage: ""
    });
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <LogoBotcamp />
          <Link to="/">
            <ExitBotcamp />
          </Link>
        </Header>

        {this.state.userMessages.map(message => (
          <UserMessageBotcamp className="first" content={message} />
        ))}
        <BotMessage />

        <Footer onSubmit={this.handleInput}>
          <InputBotcamp
            value={this.state.inputMessage}
            onChange={e => this.setState({ inputMessage: e.target.value })}
          />
        </Footer>
      </Wrapper>
    );
  }
}
