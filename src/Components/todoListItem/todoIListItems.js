import React from 'react';

import './todoListItem.css';


class TodoListItem extends React.Component{

    render () {
        const { label, onDeleteItem, toggleImportant, toggleDone, done, important } = this.props;
        
        let classNames = "todo-list-item";
      
        if(done) {
          classNames += ' done';
        }
        if(important) {
          classNames += ' important';
        }
    
        return (
            <div className={classNames}>
                <span 
                    className='todo-list-label' 
                    onClick= {toggleDone}

                >
                    { label }
                </span>
                <button 
                    className="btn btn-outline-success btn-high"
                    onClick={toggleImportant}
                >
                    <i className="fa fa-bolt" aria-hidden="true"></i>
                </button>
                <button 
                    className="btn btn-outline-danger"
                    onClick={onDeleteItem}
                >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        )   
    }
}


export default TodoListItem;