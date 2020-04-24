import React from 'react';
import ReactDOM from 'react-dom';


const AppHeader = () => {
  return <h1>To-Do List</h1>;
}

const SearchBlock = () => {
  return <input placeholder="Search..."></input>;
}

const ToDoList = () => {
  return (
  <ul>
  <li>Learn JS</li>
  <li>Read Book</li>
  <li>Learn React</li>
</ul>
);
}

const elements = (
  <div>
    <AppHeader />
    <SearchBlock />
    <ToDoList />
  </div>
)

ReactDOM.render(elements, document.getElementById('root'));
