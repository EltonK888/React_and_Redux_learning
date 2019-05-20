import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
import Item from "./components/item";
import "./index.css"

export default class App extends Component {
    state = {
        items: [],
        valueHeader: "",
        valueText: ""
    }

    handleValueHeader = (event) => {
        this.setState({valueHeader: event.target.value});
    }

    handleValueText = (event) => {
        this.setState({valueText: event.target.value});
    }
    
    procItem = (event) => {
        console.log(this.state.valueHeader);
        console.log(this.state.valueText);
        event.preventDefault();
        if (this.state.valueHeader !== ""){
            this.state.items.push({todoHeader: this.state.valueHeader, todoText: this.state.valueText, backgroundColor: "white"});
            this.setState({items: this.state.items,
                        valueHeader: "",
                        valueText: ""
                        });
        } else {
            alert("Can't enter empty field");
        }
    }

    handleClickComplete = (event) => {
        let index = event.target.getAttribute("index");
        this.state.items[index].backgroundColor = "green";
        console.log("mark as complete clicked");
        this.setState({items: this.state.items});
    }

    handleClickDelete = (event) => {
        console.log("Deleted clicked");
        let index = event.target.getAttribute("index");
        this.state.items.splice(index,1);
        this.setState({items: this.state.items});
    }

    render() {
        const Items = this.state.items.map((todo, index) => <Item key={index} index={index} todoItem={todo.todoHeader} todoText={todo.todoText} clickComplete={this.handleClickComplete} clickDelete={this.handleClickDelete} backgroundColor={todo.backgroundColor}/>)
        return (
            <div className="container">
                <h1>Todo List</h1>
                <div className="content">
                    <form onSubmit={this.procItem.bind(this)}>
                    <div className = "input-group w-100">
                        <input type="text" className="form-control" placeholder="What do you need to do?" value={this.state.valueHeader} onChange={this.handleValueHeader}></input>
                        <input type="text" className="form-control" placeholder="Additional Notes (optional)" value={this.state.valueText} onChange={this.handleValueText}></input>
                        <div className="input-group-append">
                            <input className="btn btn-secondary btn-sm" type="submit" value="submit"/>
                        </div>
                    </div>
                    </form>
                    {Items}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
