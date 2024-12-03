import { useState } from "react";
import TodoInput from "./component/TodoInput";
import styles from "./css/App.module.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className={styles.app}>
      <h1>투두</h1>
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
