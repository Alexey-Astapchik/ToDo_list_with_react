import React from 'react';

import './todoListItem.css';


class TodoListItem extends React.Component{

    clickOnLabel = () => {
        console.log(this.props.label)
    };

    // состояние state - это объект, кот. содержит данные.

    state = {
        done: true
    }
    

    render () {
        const { label, important } = this.props;
        const { done } = this.state;
        

        let classNames = 'todo-list-label';

        if(done) {
            classNames += ' done';
        }

        const style = {
            color: important ? 'tomato' : 'black'
        }
    
        return (
            <div className="todo-list-item">
                <span style={ style } 
                className={classNames}
                onClick= {this.clickOnLabel}
                >{ label }</span>
                <button className="btn btn-outline-success btn-high">
                    <i className="fa fa-bolt" aria-hidden="true"></i>
                </button>
                <button className="btn btn-outline-danger">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        )   
    }
}


export default TodoListItem;