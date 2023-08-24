import { TaskCounter } from "components/TaskCounter/TaskCounter";
import { AppBarWrapper } from "./AppBar.styled";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { deleteAllCompleted } from "redux/tasksSlice";

export const AppBar = () => {
    const dispatch = useDispatch();

    const handleDeleteCompleted = () => dispatch(deleteAllCompleted());

    return (
        <AppBarWrapper>
            <div>
                <h3>Tasks</h3>
                <TaskCounter />
            </div>
            <div>
                <h3>Delete all completed</h3>
                <Button type='button' onClick={handleDeleteCompleted}>Delete</Button>
            </div>
            <div>
                <h3>Filter by status</h3>
                <StatusFilter />
            </div>
        </AppBarWrapper>
    )
}