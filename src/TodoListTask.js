import React from 'react';



class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {

        this.props.changeStatus(e.currentTarget.checked);
    };

    render = () => {
        return (

                <div className="todoList-task">
                    <input type="checkbox" checked={this.props.isDone} onChange={this.onIsDoneChanged}/>
                    <span>{this.props.title}- priority:{this.props.priority}</span>
                </div>

        );
    }
}

export default TodoListTask;

