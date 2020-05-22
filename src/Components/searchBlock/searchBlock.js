import React from 'react';

import './searchBlock.css'
import StatusFilter from '../StatusFilter/StatusFilter';

class SearchBlock extends React.Component {

    state = {
        detectedText: '',
    }

    onSearchItem = (event) => {
        const detectedText = event.target.value;
        this.setState({ detectedText });
        this.props.onSearchItem(detectedText);  
    }

    render () {
        const searchBlockText = 'What are you looking for?';

        return (
            <div className="search-block">
                <input placeholder={searchBlockText} 
                    className="form-control"
                    onChange={this.onSearchItem}
                    value={this.state.detectedText}
                ></input>
            </div>
        )
    }
  
}

export default SearchBlock;