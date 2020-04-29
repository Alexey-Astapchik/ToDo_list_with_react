import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './Components/AppHeader';
import SearchBlock from './Components/searchBlock';
import ToDoList from './Components/toDoList';




const App = () => {
  return (
    <>
    <div>
    <AppHeader />
    <SearchBlock />
    <ToDoList />
  </div>
  <div>
    <p>Lorem lkjhgfdserty</p>
  </div>
  </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
