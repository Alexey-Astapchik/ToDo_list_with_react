import React from 'react'

import '../StatusFilter/StatusFilter.css'

class StatusFilter extends React.Component {

    btnArr = ['all', 'active', 'done']

    render () {

        const {onItemsFilter, filter} = this.props;
        const btns = this.btnArr.map((e) => {
            const btnClass = filter === e ? 'btn-outline-success' : 'btn-secondary';
            return (
                <button 
                    key={e}
                    type="button" 
                    className={`btn ${btnClass}`}
                    onClick={() =>  onItemsFilter(e)}
                >{e}</button>
            );
        });

        return (
            <div className={'info_btn-status'}>
                {btns}
            </div>
        )
    }
}

export default StatusFilter;