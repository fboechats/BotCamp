import React from "react";
import { Link } from 'react-router-dom';

import { Wrapper } from "../../Components/BotcampWrapper";
import Header from "../../Components/HeaderBotcamp";
import LogoBotcamp from "../../Components/LogoBotcamp";
<<<<<<< HEAD
import LogoutBotcamp from "../../Components/LogoutBotcamp";
import Header from "../../Components/HeaderBotcamp";
=======
import ExitBotcamp from "../../Components/ExitBotcamp";
import InputBotcamp from "../../Components/InputBotcamp";
import Footer from "../../Components/FooterBotcamp";

>>>>>>> master

const Chat = () => (
    <Wrapper>
    <Header>
<<<<<<< HEAD
        <LogoBotcamp small />
        <LogoutBotcamp />
=======
        <LogoBotcamp />
       <Link to="/"><ExitBotcamp /></Link>
>>>>>>> master
    </Header>
    <Footer>
        <InputBotcamp />
    </Footer>
    </Wrapper>
);

export default Chat;