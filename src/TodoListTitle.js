import React from 'react';
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {deleteTodoListAC} from "./store/reducer";


class TodoListTitle extends React.Component {

    onDelete = () => {
        this.props.deleteTodoList(this.props.id)
    }

    render = () => {
        return (
            <h3 className="todoList-header__title">
                {this.props.title}
                <button onClick={this. onDelete}>X</button>
            </h3>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodoList: (id) => {
            dispatch(deleteTodoListAC(id))
        }
    }
}

    const ConnectedTodoListTitle = connect(null, mapDispatchToProps)(TodoListTitle);

    export default ConnectedTodoListTitle;

