import React from 'react';


class AddNewItemForm extends React.Component {


    state = {
        error : false,
        title : ''
           };

    onAddItemButtonClick = () => {
        let newText = this.state.title;

        if (newText !== "") {
            this.props.addItem(newText)
            this.setState({error:false, title:""})
        } else {
            this.setState({error:true})
        }
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddItemButtonClick();
        }
    }

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value});
    }


    render = () => {
        const inputClassName = this.state.error   ? 'error' : '';
        return (
            <div className="newItemForm">
                <input className={inputClassName} type="text"
                       onKeyPress={this.onKeyPress }
                       placeholder="New item name"
                       value = {this.state.title}
                       onChange={this.onTitleChanged}
                />
                <button onClick={this.onAddItemButtonClick}>Add</button>
            </div>
        )
    }
}

export default AddNewItemForm;