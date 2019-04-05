import React from "react";
import { Link } from 'react-router-dom';

import { Wrapper } from "../../Components/BotcampWrapper";
import Header from "../../Components/HeaderBotcamp";
import LogoBotcamp from "../../Components/LogoBotcamp";
import LogoutBotcamp from "../../Components/ExitBotcamp";
import InputBotcamp from "../../Components/InputBotcamp";
import Footer from "../../Components/FooterBotcamp";


const Chat = () => (
    <Wrapper>
    <Header>
        <LogoBotcamp />
       <Link to="/"><LogoutBotcamp /></Link>
    </Header>
    <Footer>
        <InputBotcamp />
    </Footer>
    </Wrapper>
);

export default Chat;