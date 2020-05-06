import React from 'react';
import ReactDOM from 'react-dom';


import AppHeader from './Components/AppHeader/AppHeader';
import SearchBlock from './Components/searchBlock/searchBlock';
import ToDoList from './Components/toDoList/toDoList';





const App = () => {

  const todoData = [
    {label: 'Learn C#', important:true, id:1},
    {label: 'Learn React', important:false, id:2},
    {label: 'Learn C++', important:false, id:3},
    {label: 'Python', important:true, id:4}
  ] 

  return (
    <>
    <div>
    <AppHeader />
    <SearchBlock />
    <ToDoList todoItem ={todoData} />
  </div>
  </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
