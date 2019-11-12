import { connect } from "react-redux";
import { Dispatch } from "redux";
import { remove } from "../actions/todolist";
import ListItems from "../components/ListItems";
import { ToDoListState } from "../reducer";

interface StateProps {
  items: string[];
}

interface DispatchProps {
  remove: (idx: number) => void;
}

const mapStateToProps = (state: ToDoListState): StateProps => ({
  items: state.items
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  remove: idx => dispatch(remove(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
