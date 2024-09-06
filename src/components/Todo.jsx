import { useState } from "react";

import Todoitem from "./Todoitem";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completesTodo = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todoitem todos={todos} setTodos={setTodos} />
      <Footer completesTodo={completesTodo} totalTodos={totalTodos} />
    </div>
  );
}
