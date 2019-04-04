import styled from "styled-components";


const BtnBotcamp = styled.button`
        width: 280px;
        height: 50px;
        border-radius: 25px;
        color: white;
        background-color: #ee3e25;
        text-transform: uppercase;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        transition: transform .1s ease-in-out;
        &:active {
            transform: scale(.9);
        }
`;

export default BtnBotcamp;