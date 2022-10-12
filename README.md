# Redux로 TodoList 만들기..

첫 Redux로 적용해 보았다.. 처음이라 너무 어렵고 이해하기 힘들었는데 완성해서 다행이다.

---

<img width="1230" alt="스크린샷 2022-10-12 오전 9 26 37" src="https://user-images.githubusercontent.com/112137813/195222110-fd170442-9fb3-4213-b8a1-e25072b133ee.png">

---
### `Components 구조`

1. Form.jsx : 제목, 내용을 받아오는 곳
2. Header.jsx : 최상단 헤더
3. Layout.jsx : 홈의 전체의 틀
4. TodoList.jsx : TodoList의 핵심!

### `사용한 패키지`

"@testing-library/jest-dom": "^5.16.5",\
    "@testing-library/react": "^13.4.0",\
    "@testing-library/user-event": "^13.5.0",\
    "react": "^18.2.0",\
    "react-dom": "^18.2.0",\
    "react-redux": "^8.0.4",\
    "react-router-dom": "^6.4.2",\
    "react-scripts": "5.0.1",\
    "redux": "^4.2.0",\
    "styled-components": "^5.3.6",\
    "web-vitals": "^2.1.4"

### `핵심 주제`

1. 리액트 라우터 사용
2. 리액트 리덕스 사용
3. 리액트 스타일 컴포넌트 사용


---

### TroubleShooting

1. Form Tag 사용시 새로고침

Form tag default 값은 submit이라서 추가하기 버튼 누르면 저장후 새로고침되서 리렌더링 됨..

따라서 button 타입에 버튼을 입력하거나 onSubmit에 추가하는 함수 만들고 그안에서  e.preventDefault(); 함수 이용해서 제출 막기 

<br> 


2. 상세 페이지로 이동시 값 보내주기

상세보기 누르면 id값과 같은 내용 상세페이지로 보여주는 과정에서 값을 보내주는게 안됬었음..
```
<Link to={`/${todos.id}`} state={{ id: todos.id, title: todos.title, body: todos.body }} >
```
이렇게 state={{ }} 로 안에 값을 보내주면 상세페이지에서 useLocation()으로 받아와서 값을 보내줄 수 있음

보내주는 값을 구조분해 할당하여 위치에 맞는 값을 나타내줌!  

<br> 


3. Toggle = 완료, 취소 판별
```
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
```
새로운 배열을 만들고 그에 맞는 id를 확인하여 isDone값을 변환 !! 
      
<br> 
