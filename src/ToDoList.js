import { useEffect, useState } from 'react';

function ToDoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = (event) => setTodo(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim().length === 0) return;
    setTodos((prev) => [todo, ...prev]);
    setTodo('');
  };

  // useEffect(() => console.log(todos), [todos]);

  return (
    <div>
      <h1>ToDoList ({todos.length})</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type TODO"
          onChange={handleChangeTodo}
          value={todo}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
