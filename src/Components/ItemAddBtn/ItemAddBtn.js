import React from 'react';


import '../ItemAddBtn/ItemAddBtn.css'

class ItemAddBtn extends React.Component {

    state = {
        inputText: ''
    };

    inputTextChange = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.clickToAdd(this.state.inputText);
        this.state.inputText = '';
    };

    render () {
        return (
            <form 
                className='ItemBtn d-flex'
                onSubmit={this.onSubmit}
            >
                    <input  
                        className="newDeal form-control mr-3"
                        onChange={this.inputTextChange}
                        placeholder="Hey:) What are you going to do?"
                        required
                        value={this.state.inputText}
                    ></input>
                <button 
                    className="btn btn-outline-secondary"
                    type="submit"
                >
                    Add a new item
                </button>  
            </form>
        )
    }
}

export default ItemAddBtn;