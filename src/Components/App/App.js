import React from 'react';


import AppHeader from '../AppHeader/AppHeader';
import SearchBlock from '../searchBlock/searchBlock';
import ToDoList from '../toDoList/toDoList';

import '../App/App.css'

class App extends React.Component {

  state = {
    todoData: [
      {label: 'Learn C#', important:true, id:1},
      {label: 'Learn React', important:false, id:2},
      {label: 'Learn C++', important:false, id:3},
      {label: 'Python', important:true, id:4}
    ] 
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id)
      todoData.splice(index, 1);
      return {
        todoData: todoData
      }
    })
  }

  render() {
    return (
      <>
      <div className="App">
      <AppHeader />
      <SearchBlock />
      <ToDoList todoItem ={this.state.todoData} onDelete={this.deleteItem} />
    </div>
    </>
    )
  }
}

export default App; 