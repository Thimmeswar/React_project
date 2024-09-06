import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form action="" className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modelInput}
          type="text"
          value={todo.name}
          placeholder="Enter your Todo list items"
          onChange={(e) => setTodo({ name: e.target.value })}
        />
        <button className={styles.modelButton} type="submit">
          {" "}
          add
        </button>
      </div>
    </form>
  );
}
