import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import App from "../App";
import { changeValueHeaderAction, changeValueTextAction, clearValuesAction, addTodoAction, completeTodoAction, deleteTodoAction } from "../actions/actions"

const mapStateToProps = state => {
    return {
        items: state.items,
        valueHeader: state.valueHeader.length === 0 ? "" : state.valueHeader,
        valueText: state.valueText.length === 0 ? "" : state.valueText
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeValueHeaderAction,
        changeValueTextAction,
        clearValuesAction,
        addTodoAction,
        completeTodoAction,
        deleteTodoAction
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)