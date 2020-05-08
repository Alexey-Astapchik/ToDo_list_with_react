import React from 'react';

import './searchBlock.css'
import StatusFilter from '../StatusFilter/StatusFilter';
const SearchBlock = () => {
    const searchBlockText = 'What are you looking for?';
    return (
        <div className="search-block">
            <input placeholder={searchBlockText} className="form-control"></input>
            <StatusFilter/>
        </div>
    )
}

export default SearchBlock;