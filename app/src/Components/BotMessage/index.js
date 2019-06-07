import React from "react";

import { Container, Avatar, Message } from "./styles";

import BotImage from "../../img/botcamp.png";

const BotMessage = () => (
  <Container className="first">
    <Avatar>
      <img src={BotImage} alt="Avatar Bot" />
    </Avatar>
    <Message content="327.836.231-87" />
  </Container>
);

export default BotMessage;
