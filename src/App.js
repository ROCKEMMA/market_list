import './App.css';

const todos = [
  {text: 'Tarea uno', completed: false},
  {text: 'Tarea dos', completed: false},
  {text: 'Tarea tres', completed: false},
];

function App() {
  return (
    <React-Fragment>
      <TodoCounter />
      <h2>Has completado 2 de 3 TODOs</h2>
      
      <TodoSearch />
      <input placeholder="Cebolla"/>

      <TodoList>
        {todos.map(todo =>(<TodoItem/>))}
      </TodoList>

      <CreatTodoButton />
      <button>+</button>
    </React-Fragment>

  );
}

export default App;

