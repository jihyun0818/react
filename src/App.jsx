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
        id: Date.now(), // 현재 시간을 ID로 사용함 (매번 고유한 값이 생김)
        text, // 할 일의 내용 (매개변수로 받은 텍스트)
        completed: false, // 처음 추가할 때는 완료되지 않은 상태로 설정함
      },
    ];
    setTodos(newTodos); // 상태 업데이트
    localStorage.setItem("todos", JSON.stringify(newTodos)); // 로컬 스토리지에 새 할 일 목록을 저장함 (문자열로 변환해서 저장해야 함)
  };

  return (
    <div className={styles.app}>
      <h1>투두</h1>
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
