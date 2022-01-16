import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
// import logo from './logo.svg';
// import './App.css';

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: 'false'},
  {text: 'Llorar con la llorona', completed: 'false'}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem  key={todo.text} text ={todo.text}/>
        ))}
      </TodoList>
      {/* {<CreateTodoButtom />} */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
