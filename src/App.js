import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { tasks } from './tasks.json';
import Form from './components/Form';

class App extends Component {
    //se re quiere poner el navbar
    constructor() {
        super();
        this.state = {
            tasks
        };
        this.handleAddTasks = this.handleAddTasks.bind(this);

    }

    handleAddTasks(tasks) {
        this.setState({
            tasks: [...this.state.tasks, tasks]
        })
    }

    removeTasks(index) {
        if (window.comfir('Are you sure you want to delete it??')) {
            console.log(index);
            this.setState({
                tasks: this.state.tasks.filter((e, i) => {
                    return i !== index
                })
            })
        }
    }
    render() {
        const tasks = this.state.tasks.map((tasks, i) => {
            return (
                <div className="col-md-4" >
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{tasks.title}</h3>
                            <span >
                                {tasks.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{tasks.descriptions}</p>
                            <p><mark>{tasks.responsible}</mark></p>
                        </div>
                        <div className=" card-footer">
                            <button className="btn btn-danger" onClick={this.removeTasks.bind(this, i)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="App">

                <nav className="navbar navbar-dark bg-dark">
                    <a className="text-white">
                        tasks
                        <span className="badge badge-pill badge-light ml-2">
                            {this.state.tasks.length}
                        </span>
                    </a>
                </nav>

                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <img src={logo} className="App-logo" alt="logo"></img>
                            <Form onAddtaks={this.handleAddTasks} />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {tasks}
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default App;