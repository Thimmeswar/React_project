import Todolist from "./Todolist";
import styles from "./todoitem.module.css";
export default function Todoitem({ todos, setTodos }) {
  const sortedTodo = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.item}>
      {sortedTodo.map((item) => (
        <Todolist
          key={item.name}
          item={item}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
}
