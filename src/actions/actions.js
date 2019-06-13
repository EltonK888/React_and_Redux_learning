export const CHANGE_VALUE_HEADER = "CHANGE_VALUE_HEADER";
export const CHANGE_VALUE_TEXT = "CHANGE_VALUE_TEXT";
export const CLEAR_VALUES = "CLEAR_VALUES";
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const changeValueHeaderAction = (valueHeader) => {
    return {
        type: CHANGE_VALUE_HEADER,
        payload: valueHeader
    }
}

export const changeValueTextAction = (valueText) => {
    return {
        type: CHANGE_VALUE_TEXT,
        payload: valueText
    }
}

export const clearValuesAction = () => {
    return {
        type: CLEAR_VALUES
    }
}

export const addTodoAction = ({todoHeader, todoText, backgroundColor}) => {
    return {
        type: ADD_TODO,
        todoHeader: todoHeader,
        todoText: todoText,
        backgroundColor: backgroundColor
    }
}

export const completeTodoAction = (backgroundColor, index) => {
    return {
        type: COMPLETE_TODO,
        backgroundColor: backgroundColor,
        index: index
    }
}

export const deleteTodoAction = (index) => {
    return {
        type: DELETE_TODO,
        index: index
    }
}