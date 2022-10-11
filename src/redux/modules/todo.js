const CREATE = "CREATE";
const DELITE = "DELITE";
const TOGGLE = "TOGGLE";

export const addTodo = (inputs) => {
  return {
    type: CREATE,
    inputs,
  };
};
export const deliteTodo = (id) => {
  return {
    type: DELITE,
    id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};

const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: true,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.inputs];
    case DELITE:
      return state.filter((todos) => todos.id !== action.id);
    case TOGGLE:
      const newTodos = [];
      state.map((todos) => {
        if (todos.id === action.id) {
          return newTodos.push({ ...todos, isDone: !todos.isDone });
        } else {
          return newTodos.push({ ...todos });
        }
      });
      return newTodos;
    default:
      return state;
  }
};

export default reducer;
