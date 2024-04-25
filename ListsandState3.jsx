import React, { useState } from 'react';

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();

    const todo = event.target.elements.todo.value;

    setTodos((prevTodos) => [...prevTodos, todo]);
    event.target.reset();
    }

  function handleRemoveTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input data-testid="todo-input" name="todo" />
        <button type="submit">Add</button>
      </form>

      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
