import styled from "styled-components";

import logo from "../../img/logo.png";

const LogoBotcamp = styled.img.attrs({
    src: logo,
    alt: "Logo do aplicativo BotCamp"
})`
    width: ${props => (props.small ? "200px" : "248px")};
`;

export default LogoBotcamp;