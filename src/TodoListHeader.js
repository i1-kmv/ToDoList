import React from 'react';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTitle from "./TodoListTitle";


class TodoListHeader extends React.Component {





    render = () => {



        return (
            <div className="todoList-header">
                <TodoListTitle title={this.props.title}   id = {this.props.id}/>
               <AddNewItemForm addItem={this.props.addTask}/>
            </div>

        );
    }
}

export default TodoListHeader;

