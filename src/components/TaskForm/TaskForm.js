import { Button } from "components/Button/Button"
import { FormStyled, FormInput } from "./TaskForm.styled"
import { useDispatch } from "react-redux"
import { addTask } from "redux/tasksSlice";

export const TaskForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        if (!form.elements.text.value) {
            alert('Enter text!');
            return;
        }

        dispatch(addTask(form.elements.text.value));
        form.reset();
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <FormInput type="text" name='text' placeholder="Enter task text..." />
            <Button type='submit'>Add task</Button>
        </FormStyled>
    )
}