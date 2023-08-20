import { Task } from "components/Task.js/Task";
import { ListStyled } from "./TaskList.styled";
import { useSelector } from "react-redux";
import { statusFilters } from "redux/constants";
import { getFilter, getTasks } from "redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

export const TaskList = () => {
    const tasks = useSelector(getTasks)

    const statusFilter = useSelector(getFilter);

    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <ListStyled>
            {
                visibleTasks.map(task => (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                ))
            }
        </ListStyled>
    )
}