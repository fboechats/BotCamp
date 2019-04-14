import styled from "styled-components";

const InputBotcamp = styled.input.attrs({
  type: "text",
  placeholder: "Diz aí..."
})`
  width: 100vw;
  height: 50px;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fbfbff;
  padding: 14px 11px 14px 16px;
  color: rgba(0, 0, 0, 0.33);
  font-family: Roboto;
  font-size: 20px;
  border: none;
`;

export default InputBotcamp;
