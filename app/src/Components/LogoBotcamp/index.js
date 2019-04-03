import styled from "styled-components";

import logo from "../../img/logo.png";

const LogoBotcamp = styled.img.attrs({
    src: logo,
    alt: "Logo do aplicativo BotCamp"
})`
    width: 248px;
    position: absolute;
    top: 120px;
    margin-left: calc(50% - 124px);
`;

export default LogoBotcamp;