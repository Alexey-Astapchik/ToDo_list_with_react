import React from 'react';

import './todoListItem.css';


class TodoListItem extends React.Component{

    // состояние state - это объект, кот. содержит данные.

    state = {
        done: false,
        important: false
    }
    

    clickOnLabel = () => {
        this.setState( (state) => {
            return {
                done: !state.done 
            }
        })
    };

    makeImportant = () => {
        this.setState((state) => {
            return{
                important: !state.important
            }
        })
    } 

    render () {
        const { label, onDeleteItem } = this.props;
        const { done, important } = this.state;
        

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
                    onClick= {this.clickOnLabel}
                >
                    { label }
                </span>
                <button 
                    className="btn btn-outline-success btn-high"
                    onClick={this.makeImportant}
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