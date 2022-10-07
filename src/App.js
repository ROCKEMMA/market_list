import React from 'react';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreatTodoButton} from './components/CreateTodoButton';


const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          /> 
        ))}
      </TodoList>

      <CreatTodoButton />

    </React.Fragment>

  );
}

export default App;

