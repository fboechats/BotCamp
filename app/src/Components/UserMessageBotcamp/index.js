import styled from "styled-components";

const UserMessageBotcamp = styled.p.attrs({
  children: props => props.content
})`
  font-family: "Roboto";
  color: white;
  padding-top: 11px;
  padding-left: 15px;
  width: 55%;
  height: 40px;
  background-color: rgba(238, 62, 37, 0.83);
  border-radius: 16px 0 16px 16px;
  margin: 0 16px 20px auto;
`;

export default UserMessageBotcamp;
