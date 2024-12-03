import { useState, useEffect } from "react";
import TodoInput from "./component/TodoInput";
import styles from "./";

function App() {
  /**
   * R 읽기 - 로컬스토리지에 저장되어있는 정보 읽어오기
   */
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    // 로컬스토리지에 todos라는 객체를 가져와서 storedTodos변수에 할당
    return storedTodos ? JSON.parse(storedTodos) : [];
    // (삼항연산자)로컬스토리지에 데이터가 없으면 빈 배열로 초기화
    // 이 반환되는 내용이 todos가 됨
  });

  useEffect(() => {
    // todos 변경될 때마다 useEffect가 실행하여 로컬 스토리지 업데이트
    localStorage.setItem("todos", JSON.stringify(todos));
    // 로컬스토리지에 todos라는 객체를 찾아가 todos로 들어온 값을 문자열(string) 형태로 변환해서 저장
  }, [todos]);

  /**
   * C 생성하기 - todo 등록
   * @param {*} text todo의 내용
   */
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
    /* 기존의 todos항목을 복제해오고, 그 뒤로 새로운 todo를 아이템으로 추가
    아이템 구성으로는 아래 세 프로퍼티로 구성해
    id: 등록시점을 밀리초로 변형한 숫자(시간은 흐르기때문에 고유할 수 밖에 없음)
    text: 파라미터로 들어온 텍스트(할 일)
    completed: 완료여부 false(기본값) */
  };

  return (
    <div className={styles.app}>
      <h1>오늘 C만 한다</h1>
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
