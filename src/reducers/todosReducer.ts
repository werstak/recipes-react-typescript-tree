import {CREATE_TASK, DELETE_TASK, COMPLETE_TASK, UPDATE_TASK} from '../constants';
import {TodoInterface} from '../interfaces';
import {ActionTypeBase} from '../actions/todosCreator';

export interface TodoReducerType {
    list: TodoInterface[]
}

const initialState: TodoReducerType = {
    list: [
        {
            title: 'Go shopping for a week',
            isCompleted: true
        },
        {
            title: 'Sort in the task manager affairs for a week',
            isCompleted: true
        },
        {
            title: 'Delete unnecessary files from the computer',
            isCompleted: false
        },
        {
            title: "Go outside and walk to a place you've never been to",
            isCompleted: false
        }
    ]
};

const todosReducer = (state = initialState, action: ActionTypeBase) => {
    switch (action.type) {
        case CREATE_TASK: {
            const listClone = [...state.list];
            const newTask = action.payload
            listClone.push(newTask);
            return {
                list: listClone
            }
        }
        case COMPLETE_TASK: {
            const listClone = [...state.list];
            const index = action.payload.index!;
            const changeIsCompleted = {...listClone[index], isCompleted: action.payload.isCompleted};
            listClone[index] = changeIsCompleted;
            return {
                list: listClone
            }
        }
        case UPDATE_TASK: {
            const listClone = [...state.list];
            const index = action.payload.index!;
            const changeTask = {...listClone[index], title: action.payload.title};
            listClone[index] = changeTask;
            return {
                list: listClone
            }
        }
        case DELETE_TASK: {
            const listClone = [...state.list];
            listClone.splice(action.payload.index!, 1);
            return {
                list: listClone
            }
        }
        default: {
            return state;
        }
    }
};

export default todosReducer;
