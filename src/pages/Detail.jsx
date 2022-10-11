import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const { id, title, body } = location.state;

  return (
    <DivLayout>
      <DivHeader>
        <DivDiv px="1.5rem">id : {id}</DivDiv>
        <Link to="/">
          <Stbtn fontColor="tomato">이전으로</Stbtn>
        </Link>
      </DivHeader>
      <DivBody>
        <DivDiv px="3rem">{title}</DivDiv>
        <DivDiv px="2rem">{body}</DivDiv>
      </DivBody>
    </DivLayout>
  );
}

export default Detail;

const DivLayout = styled.div`
  max-width: 700px;
  height: 500px;
  border: 1px solid tomato;
  border-radius: 10px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 1px 3px 3px 0px;
`;

const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  border: 1px solid tomato;
  align-items: center;
  margin: 10px;
  padding: 20px;
  justify-content: space-between;
  box-shadow: 1px 2px 2px 0px;
`;

const DivBody = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin: 10px;
  padding: 30px;
`;

const DivDiv = styled.div`
  color: #e64b2f;
  font-size: ${({ px }) => px};
`;

const Stbtn = styled.button`
  padding: 10px;
  width: 120px;
  color: ${({ fontColor }) => fontColor};
  background-color: white;
  border-radius: 17px;
  border: 2px solid ${({ fontColor }) => fontColor};
  cursor: pointer;
`;
