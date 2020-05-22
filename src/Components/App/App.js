import React from 'react';


import AppHeader from '../AppHeader/AppHeader';
import SearchBlock from '../searchBlock/searchBlock';
import ToDoList from '../toDoList/toDoList';

import '../App/App.css'
import ItemAddBtn from '../ItemAddBtn/ItemAddBtn';
import StatusFilter from '../StatusFilter/StatusFilter';

class App extends React.Component {

  state = {
    todoData: [
      {label: 'Learn C#', important:false, done:false, id:1},
      {label: 'Learn React', important:false, done:false, id:2},
      {label: 'Learn C++', important:false, done:false, id:3},
      {label: 'Python', important:false, done:false, id:4}
    ],
    detectedText: '',
    filter: 'all',
  };

  deleteItem = (id) => {
    this.setState((state) => {
      const index = state.todoData.findIndex((el) => el.id === id)
 
      const newToDoArr = [
        ...state.todoData.slice(0, index), 
        ...state.todoData.slice(index + 1)
      ]
      return {
        todoData: newToDoArr
      }
    })
  }

  addItem = (text) => {
    console.log(text)
    const newItem = {
      label: text,
      important: false, 
      id: this.state.todoData.length + 1
    }

    this.setState(({ todoData }) => {
      const newItemsArr = [...todoData, newItem];
      return {
        todoData: newItemsArr
      }
    })
  }

  toggleProp = (id, arr, prop) => {
    
      const index = arr.findIndex((el) => el.id === id);

      const oldObj = arr[index];
      const newObj = {...oldObj, [prop]: !oldObj[prop]};

      return [
        ...arr.slice(0, index), 
        newObj,
        ...arr.slice(index + 1)
      ];
  };  

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(id, todoData, 'done')
      }
    })
  }

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(id, todoData, 'important')
      }
    })
  }

  onSearchItem = (detectedText) => {
    this.setState({detectedText})
  }


  searchInTodoList = (arr, detectedText) => {
    if(detectedText.length === 0){
      return arr;
    }
    return arr.filter((e) => {
      return  e.label.toUpperCase().indexOf(detectedText.toUpperCase()) > -1;
    })
  } 

  itemsFilter = (arr, filter) => {
    switch(filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((el) => !el.done);
      case 'done':
        return arr.filter((el) => el.done);
      default: 
        return arr;
    }
  }

  onItemsFilter = (filter) => {
    this.setState({filter})
  }

  render() {
    const { todoData, detectedText, filter } = this.state;
    const detectedItems = this.itemsFilter(
      this.searchInTodoList(todoData, detectedText), filter);
    const done = todoData.filter((el) => el.done).length;
    const todo = this.state.todoData.length - done;

    return (
        <div className="App">
          <AppHeader todo={todo} done={done} />
          <SearchBlock 
            onSearchItem={this.onSearchItem}
          />
          <StatusFilter
            onItemsFilter={ this.onItemsFilter }
            filter= {filter}
          />
          <ToDoList 
            todoItem ={detectedItems} 
            onDelete={this.deleteItem}
            toggleDone={this.toggleDone}
            toggleImportant={this.toggleImportant} 
          />
          <ItemAddBtn clickToAdd={ this.addItem }/>
      </div>
    )
  }
}

export default App; 