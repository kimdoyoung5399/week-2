import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <DivWarp>
      <DivContent>My Todo List</DivContent>
      <DivContent>React</DivContent>
    </DivWarp>
  );
}

export default Header;

const DivWarp = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  background-color: #ff6347;
`;

const DivContent = styled.div`
  padding: 20px;
  font-size: 1.5rem;
  color: white;
  background-color: tomato;
  border-radius: 10px;
  border: none;
`;
