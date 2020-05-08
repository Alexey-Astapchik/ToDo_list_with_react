import React from 'react';


import AppHeader from '../AppHeader/AppHeader';
import SearchBlock from '../searchBlock/searchBlock';
import ToDoList from '../toDoList/toDoList';

import '../App/App.css'

const App = () => {

  const todoData = [
    {label: 'Learn C#', important:true, id:1},
    {label: 'Learn React', important:false, id:2},
    {label: 'Learn C++', important:false, id:3},
    {label: 'Python', important:true, id:4}
  ] 

  return (
    <>
    <div className="App">
    <AppHeader />
    <SearchBlock />
    <ToDoList todoItem ={todoData} />
  </div>
  </>
  )
};

export default App; 