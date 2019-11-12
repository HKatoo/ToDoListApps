import { connect } from "react-redux";
import { Dispatch } from "redux";
import { add } from "../actions/todolist";
import AddTask from "../components/AddTask";
import { ToDoListState } from "../reducer";

interface StateProps {
  items: string[];
}

interface DispatchProps {
  add: (value: string) => void;
}

const mapStateToProps = (state: ToDoListState): StateProps => ({
  items: state.items
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: value => dispatch(add(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
