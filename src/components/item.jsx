import React from 'react';
import PropTypes from "prop-types";

const Item = (props) => {
    let style = {
        backgroundColor: props.backgroundColor
    }
    console.log(props)
    return (
        <div className="card my-4" style={style}>
            <h2 className="text-center">{props.todoItem}</h2>
            <p className="ml-4">{props.todoText}</p>
            <div className="row justify-content-end">
                <div className="col-md-auto mb-2 mb-md-0">
                    <button index={props.index} className="btn btn-block btn-success btn-sm" onClick={props.clickComplete}>Mark As Complete</button>
                </div>
                <div className="col-md-auto">
                    <button index={props.index} className="btn btn-block btn-danger btn-sm" onClick={props.clickDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    todoItem: PropTypes.string,
    todoText: PropTypes.string,
    clickComplete: PropTypes.func,
    clickDelete: PropTypes.func,
    backgroundColor: PropTypes.string,
    index: PropTypes.number
}
export default Item;