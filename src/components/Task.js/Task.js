import { MdClose } from "react-icons/md";
import { ListItemWrapper } from "./Task.styled";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "redux/tasksSlice";

export const Task = ({task}) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(task.id));

    const handleToggle = () => dispatch(toggleCompleted(task.id));

    return (
        <ListItemWrapper>
            <div style={{display: 'flex', gap: '8px'}}>
                <input type="checkbox" checked={task.completed} onChange={handleToggle} />
                <p>{task.text}</p>
            </div>
            <button type='button' onClick={handleDelete} style={{color: 'red', backgroundColor: 'inherit', border: 'none', cursor: 'pointer'}}>
                <MdClose size={24} />
            </button>
        </ListItemWrapper>
    )
}