import styled from "styled-components";

const Header = styled.header`
  height: 66px;
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: #26265e;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  padding: 10px 16px;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    border-top: 14px solid #26265e;
    border-left: 100vw solid transparent;
  }
`;

export default Header;
