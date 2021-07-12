import React, { useState } from "react";

console.log(asf);
function App({ name }) {
  const [todos, setTodos] = useState([]);

  function handleRemoveTodo(index) {
    setTodos((todos) => todos.filter((todo, _index) => _index !== index));
  }

  function handleAddToddo(event) {
    event.preventDefault();

    const text = event.target.text.value;
    if (!text || todos.includes(text)) return;

    setTodos((todos) => todos.concat(text));
    event.target.text.value = "";
  }

  return (
    <div>
      <form onSubmit={handleAddToddo}>
        <input name="text" type="text" />
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            {todo} <button onClick={() => handleRemoveTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
