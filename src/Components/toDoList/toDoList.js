import React from "react";

import TodoListItem from "../todoListItem/todoIListItems";
import './toDoList.css'

const ToDoList = ({todoItem}) => {
  
  const items = todoItem.map((item) => {

    const {id, ...others} = item;
    return (
      <li key={id} className="list-group-item">
      <TodoListItem {...others}/>
      </li>
    );
  })

  return (
    <ul className="list-group todo-list">
      { items }
    </ul>
  );
};

export default ToDoList;
