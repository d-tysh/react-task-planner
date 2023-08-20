import { AppContainer } from "./App.styled";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  return (
    <AppContainer>
      <AppBar />
      <TaskForm />
      <TaskList />
    </AppContainer>
  );
};
