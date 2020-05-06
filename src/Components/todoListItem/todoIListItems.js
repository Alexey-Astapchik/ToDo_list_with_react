import React from 'react';

import './todoListItem.css'
const TodoListItem = ({label, important}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <div className="todo-list-item">
            <span style={ style } className="todo-list-label">{ label }</span>
            <button className="btn btn-outline-success btn-high">
                <i className="fa fa-bolt" aria-hidden="true"></i>
            </button>
            <button className="btn btn-outline-danger">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </div>
    )   
}

export default TodoListItem;