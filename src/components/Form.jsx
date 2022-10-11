import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";

function Form() {
  const addDispatch = useDispatch();

  const initialState = {
    id: new Date().getTime(),
    title: "",
    body: "",
    isDone: false,
  };

  const [inputs, setInputs] = useState(initialState);

  const { title, body } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputs.title.trim() === "" || inputs.body.trim() === "") {
      return alert("Please enter a message");
    }
    addDispatch(
      addTodo({
        ...inputs,
      })
    );
    setInputs(initialState);
  };
  return (
    <StForm onSubmit={onSubmit}>
      <FormDiv>
        <StLabel name="title">제목</StLabel>
        <StInput name="title" type="text" onChange={onChange} value={title} />
        <StLabel name="body">내용</StLabel>
        <StInput name="body" type="text" onChange={onChange} value={body} />
      </FormDiv>
      <Stbtn>추가하기</Stbtn>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  background-color: #ff9574;
  gap: 20px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
`;

const FormDiv = styled.div`
  padding: 20px;
  gap: 20px;
`;

const StInput = styled.input`
  width: 230px;
  padding: 15px;
  border: 1px solid tomato;
  border-radius: 20px;
`;

const StLabel = styled.label`
  text-align: center;
  padding: 20px;
  color: white;
`;

const Stbtn = styled.button`
  margin: 20px;
  width: 170px;
  color: white;
  background-color: tomato;
  border-radius: 20px;
  border: 2px solid white;
  cursor: pointer;
`;
