import Todo from "./Todo";
import React from "react";

export default function TodoList({ todoList,onCheckBtnClick }) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />
      ))}
    </>
  );
}
