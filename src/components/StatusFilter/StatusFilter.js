import { Button } from "components/Button/Button"
import { ButtonWrapper } from "./StatusFilter.styled"
import { useDispatch, useSelector } from "react-redux"
import { statusFilters } from "redux/constants";
import { getFilter } from "redux/selectors";
import { setStatusFilter } from "redux/actions";

export const StatusFilter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <ButtonWrapper>
            <Button selected={filter === statusFilters.all} type='button' 
                onClick={() => handleFilterChange(statusFilters.all)}
            >All</Button>
            <Button selected={filter === statusFilters.active} type='button'
                onClick={() => handleFilterChange(statusFilters.active)}
            >Active</Button>
            <Button selected={filter === statusFilters.completed} type='button'
                onClick={() => handleFilterChange(statusFilters.completed)}
            >Completed</Button>
        </ButtonWrapper>
    )
}