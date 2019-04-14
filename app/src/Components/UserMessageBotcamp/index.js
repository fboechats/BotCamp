import styled from "styled-components";

const UserMessageBotcamp = styled.span.attrs({
  children: props => props.content
})`
  font-family: "Roboto";
  color: white;
  align-self: flex-end;
  position: absolute;
  top: 105.5px;
  right: 16.8px;
  padding-top: 11px;
  padding-left: 15px;
  width: 257px;
  height: 40px;
  background-color: rgba(238, 62, 37, 0.83);
  border-radius: 16px 0 16px 16px;
`;

export default UserMessageBotcamp;
