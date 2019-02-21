import React, { Component } from 'react';
import TaskItem from './TaskItem';
import './TaskItem.css';


class ToDoList extends Component {

    state = {
        list: this.props.todo
    }

    constructor(props) {
        super(props);
    }

    render() {

        // Create a new array
        const formattedList = this.state.list.map(item => <TaskItem key={item.id} task={item} />);

        return (
            <ul className="todolist">
                {formattedList}
            </ul>
        );
    }

}


export default ToDoList;