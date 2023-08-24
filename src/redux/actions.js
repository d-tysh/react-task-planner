import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addTask = createAction('tasks/addTask', text => {
    return {
        payload: {
            id: nanoid(),
            completed: false,
            text
        }
    }
});

export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompleted');
export const deleteAllCompleted = createAction('tasks/deleteAllCompleted');
export const setStatusFilter = createAction('tasks/setStatusFilter');