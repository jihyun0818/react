import { useState } from "react";
import TodoInput from "./component/TodoInput";
import styles from "./css/App.module.css";

function App() {
  // 할 일 목록 상태 초기화, 로컬스토리지에서 가져와서 저장
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : []; // 저장된 값 없으면 빈 배열로 초기화
  });

  // 새로운 할 일 추가하는 함수
  const addTodo = (text) => {
    const newTodos = [
      ...todos, // 기존 할 일 목록 복사
      {
        id: Date.now(), // 고유한 ID 생성
        text, // 전달된 할 일 내용
        completed: false, // 기본 완료 상태는 false로 설정
      },
    ];
    setTodos(newTodos); // 상태 업데이트
    localStorage.setItem("todos", JSON.stringify(newTodos)); // 로컬 스토리지에 저장
  };

  return (
    <div className={styles.app}>
      <h1>투두</h1>
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
