import React from 'react'

import '../StatusFilter/StatusFilter.css'

const StatusFilter = () => {
    return (
        <div className="info_btn-status">
            <button type="button" className="btn btn-outline-primary bt">All</button>
            <button type="button" className="btn btn-outline-warning bt">To-do</button>
            <button type="button" className="btn btn-outline-info bt">Done</button>
        </div>
    )
}

export default StatusFilter;