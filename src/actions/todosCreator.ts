import {CREATE_TASK, UPDATE_TASK, COMPLETE_TASK, DELETE_TASK} from '../constants/todos';
import {TodoInterface} from '../interfaces';

export interface ActionTypeBase {
    type: string;
    payload: TodoInterface;
}

export const createTask = (newTask: TodoInterface): ActionTypeBase => ({
    type: CREATE_TASK,
    payload: newTask
});

export const completeTask = (changeComplete: TodoInterface): ActionTypeBase => ({
    type: COMPLETE_TASK,
    payload: changeComplete
});

export const updateTask = (changeTask: TodoInterface): ActionTypeBase => ({
    type: UPDATE_TASK,
    payload: changeTask
});

export const deleteTask = (payload: TodoInterface): ActionTypeBase => ({
    type: DELETE_TASK,
    payload
});
