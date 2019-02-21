import React, { Component } from 'react';

class TaskItem extends Component {

    state = {
        name: this.props.task.name,
        complete: this.props.task.complete
    }

    
    constructor(props) {
        super(props);
    }

    // Created this local function to return a list of classes to the render() method (based on some questions Aaron had). 
    // That's just an example of one way to do it - it's a bit long form, but very clear to read.
    // Note the way a function is defined here, rather than `function makeClassList() { }`
    // Stick with this format
    makeClassList = () => {
        if (this.state.complete) {
            return "task complete";
        }
        return "task";
    }

    // We want to go toggle between a task being complete or not
    toggleTask = () => {

        // Set the task to it's opposite form
        const toggleToOpposite = !this.state.complete;

        // Calling setState() will trigger the render() to happen!
        // We want this, so that the "complete" class is applied/removed
        this.setState({complete: toggleToOpposite})

        // this is just here in case you wanted to also know the state
        return this.state.complete; 
    }

    render() {
        return (
            <li className={ this.makeClassList() } onClick={ this.toggleTask }>{this.state.name}</li>
        );
    }
}

export default TaskItem;