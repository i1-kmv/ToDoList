import React from 'react';
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";


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
            const action = {
                type: "DELETE-TODOLIST",
                id: id
            };

            dispatch(action)
        }
    }
}

    const ConnectedTodoListTitle = connect(null, mapDispatchToProps)(TodoListTitle);

    export default ConnectedTodoListTitle;

