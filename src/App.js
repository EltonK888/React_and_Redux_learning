import React from "react";
import Item from "./components/item";

export default (props) => {
    const handleValueHeader = (event) => {
        props.changeValueHeaderAction(event.target.value)
    }

    const handleValueText = (event) => {
        props.changeValueTextAction(event.target.value)
    }
    
    const procItem = (event) => {
        event.preventDefault();
        if (props.valueHeader !== ""){
            props.addTodoAction({todoHeader: props.valueHeader, todoText: props.valueText, backgroundColor: "white"});
            props.clearValuesAction();
        } else {
            alert("Can't enter empty field");
        }
    }

    const handleClickComplete = (event) => {
        let index = event.target.getAttribute("index");
        props.completeTodoAction("green", index);
        console.log("mark as complete clicked");
    }

    const handleClickDelete = (event) => {
        console.log("Deleted clicked");
        let index = event.target.getAttribute("index");
        props.deleteTodoAction(index);
    }

    const Items = props.items.map((todo, index) => <Item key={index} index={index} todoItem={todo.todoHeader} todoText={todo.todoText} clickComplete={handleClickComplete} clickDelete={handleClickDelete} backgroundColor={todo.backgroundColor}/>)
    return (
            <div className="container">
                <h1>Todo List</h1>
                <div className="content">
                    <form onSubmit={(event) => procItem(event)}>
                    <div className = "input-group w-100">
                        <input type="text" className="form-control" placeholder="What do you need to do?" value={props.valueHeader} onChange={(event) => handleValueHeader(event)}></input>
                        <input type="text" className="form-control" placeholder="Additional Notes (optional)" value={props.valueText} onChange={(event) => handleValueText(event)}></input>
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
