import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const { value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddtaks(this.state);
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                       <input
                       type="text"
                       name="title"
                       className="form-control"
                       onChange={this.handleInput}
                       placeholder="Title"
                       />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="responsible"
                        className="form-control"
                        onChange={this.handleInput}
                        placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="description"
                        className="form-control"
                        onChange={this.handleInput}
                        placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select
                        name="priority"
                        className="form-control"
                        onChange={this.handleInput}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>hight</option>
                        </select>
                    </div>
                    <button type="submit" className=" btn btn.primary">
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}
export  default Form;