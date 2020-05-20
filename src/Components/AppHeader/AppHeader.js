import React from 'react';

import './AppHeader.css'
const AppHeader = (props) => {
    return (
        <div className='AppHeader'>
            <h1>To-Do List</h1>
            <p className="todoCounter">
                <span> You have {props.todo}</span>
                <span className="done"> Finished {props.done}</span>
            </p>
        </div>
    )
} 

export default AppHeader;