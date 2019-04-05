import styled from 'styled-components';

const InputBotcamp = styled.textarea.attrs({
    placeholder: "Diz aí..."
})`

  width: 100vw;
  height: 50px;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fbfbff;
  resize: none;
  padding: 16px 13px;
  color: rgba(0, 0, 0, 0.33);
  font-family: Roboto;
  font-size: 18px;
`;

export default InputBotcamp;