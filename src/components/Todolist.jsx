import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deliteTodo, toggleTodo } from "../redux/modules/todo";
import { Link } from "react-router-dom";

function TodoList() {
  const deliteDispatch = useDispatch();
  const toggleDispatch = useDispatch();

  const todos = useSelector((todos) => todos.todos);

  return (
    <div>
      <StH2>Working.. 🔥</StH2>
      <DivListWarp id="Working List">
        {todos.map((todos) => {
          if (!todos.isDone) {
            return (
              <DivWarp key={todos.id}>
                <StLink
                  to={`/${todos.id}`}
                  state={{ id: todos.id, title: todos.title, body: todos.body }}
                >
                  <span>상세보기</span>
                </StLink>
                <div>
                  <StH3>
                    {todos.title.length > 15
                      ? todos.title.slice(0, 15) + "..."
                      : todos.title}
                  </StH3>
                  <p>
                    {todos.body.length > 20
                      ? todos.body.slice(0, 20) + "..."
                      : todos.body}
                  </p>
                </div>
                <BtnWarp>
                  <Stbtn
                    fontColor="red"
                    type="button"
                    onClick={() => deliteDispatch(deliteTodo(todos.id))}
                  >
                    삭제하기
                  </Stbtn>
                  <Stbtn
                    fontColor="green"
                    type="button"
                    onClick={() => toggleDispatch(toggleTodo(todos.id))}
                  >
                    {todos.isDone ? "취소!" : "완료!"}
                  </Stbtn>
                </BtnWarp>
              </DivWarp>
            );
          } else {
            return null;
          }
        })}
      </DivListWarp>
      <hr color="tomato" width="100%" />
      <StH2>Done..! 🎉</StH2>
      <DivListWarp id="Done List">
        {todos.map((todos) => {
          if (todos.isDone) {
            return (
              <DivWarp key={todos.id}>
                <StLink
                  to={`/${todos.id}`}
                  state={{ id: todos.id, title: todos.title, body: todos.body }}
                >
                  <span>상세보기</span>
                </StLink>
                <div>
                  <StH3>
                    {todos.title.length > 15
                      ? todos.title.slice(0, 15) + "..."
                      : todos.title}
                  </StH3>
                  <p>
                    {todos.body.length > 20
                      ? todos.body.slice(0, 20) + "..."
                      : todos.body}
                  </p>
                </div>
                <BtnWarp>
                  <Stbtn
                    fontColor="red"
                    type="button"
                    onClick={() => deliteDispatch(deliteTodo(todos.id))}
                  >
                    삭제하기
                  </Stbtn>
                  <Stbtn
                    fontColor="green"
                    type="button"
                    onClick={() => toggleDispatch(toggleTodo(todos.id))}
                  >
                    {todos.isDone ? "취소!" : "완료!"}
                  </Stbtn>
                </BtnWarp>
              </DivWarp>
            );
          } else {
            return null;
          }
        })}
      </DivListWarp>
    </div>
  );
}

export default TodoList;

const DivListWarp = styled.div`
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  border: 0.01rem solid #ff9574;
  border-radius: 0.5rem;
`;
const StH3 = styled.h3`
  padding: 15px;
`;
const StH2 = styled.h4`
  padding: 10px;
  font-size: 1.5rem;
`;

const DivWarp = styled.div`
  padding: 20px;
  margin: 20px;
  width: 300px;
  height: 150px;
  border: 2px solid tomato;
  border-radius: 10px;
`;
const BtnWarp = styled.div`
  display: flex;
  gap: 10px;
`;

const Stbtn = styled.button`
  margin: 5px auto;
  width: 100px;
  height: 40px;
  color: ${({ fontColor }) => fontColor};
  background-color: white;
  border-radius: 20px;
  border: 2px solid ${({ fontColor }) => fontColor};
  cursor: pointer;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;
