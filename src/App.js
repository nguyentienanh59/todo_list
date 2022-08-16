import TodoList from "./components/TodoList";
import React, { useState } from "react";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm ..."
        elemAfterInput={
          <Button isDisabled={false} appearance="primary">
            Them
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList />
    </>
  );
}

export default App;
