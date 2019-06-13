import { combineReducers } from "redux";
import { CHANGE_VALUE_HEADER, CHANGE_VALUE_TEXT, CLEAR_VALUES, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actions/actions";

const valueHeaderReducer = (state="", action) => {
    switch (action.type) {
        case CHANGE_VALUE_HEADER:
            return action.payload;
        case CLEAR_VALUES:
            return "";
        default:
            return state;
    }
}

const valueTextReducer = (state="", action) => {
    switch(action.type) {
        case CHANGE_VALUE_TEXT:
            return action.payload;
        case CLEAR_VALUES:
            return "";
        default:
            return state;
    }
}

const itemsReducer= (state=[], action) => {
    let newState = [...state];
    switch(action.type) {
        case ADD_TODO:
            return [...state, {todoHeader: action.todoHeader, todoText: action.todoText, backgroundColor: action.backgroundColor}];
        case COMPLETE_TODO:
            newState[action.index].backgroundColor = action.backgroundColor;
            return newState;
        case DELETE_TODO:
            newState = [...state];
            newState.splice(action.index, 1);
            return newState;
        default:
            return state;
    }
}

export default combineReducers({
    items: itemsReducer,
    valueHeader: valueHeaderReducer,
    valueText: valueTextReducer
})