import React from 'react';

import './searchBlock.css'
const SearchBlock = () => {
    const searchBlockText = 'What are you looking for?'
    return (
        <div className="search-block">
            <input placeholder={searchBlockText} className="form-control"></input>
        </div>
    )
}

export default SearchBlock;