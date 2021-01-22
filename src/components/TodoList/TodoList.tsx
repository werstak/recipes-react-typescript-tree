import React, {useState} from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {createTask, deleteTask, completeTask, updateTask} from '../../actions/todosCreator';
import TodoItem from './TodoItem/TodoItem';
import {TodoInterface} from '../../interfaces';
import {Dispatch} from 'redux';
import './TodoList.css';

/**
 * interfaces
 */
interface CompleteTaskType {
    index: number;
    isCompleted: boolean;
}
interface UpdateTaskType {
    index: number;
    title: string;
}
interface PropsTodoListType {
    todos: TodoInterface[];
    create: (todo: TodoInterface) => void;
    deleteIndexTask: (index: number) => void;
    completeTaskType: ({index, isCompleted}: CompleteTaskType) => void;
    updateTaskType: ({index, title}: UpdateTaskType) => void;
}

const TodoList = ({todos, create, deleteIndexTask, updateTaskType, completeTaskType}: PropsTodoListType) => {

    /**
     * handleSubmit
     */
    const [taskState, setTaskState] = useState('');
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskState(e.target.value)
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (taskState !== "") {
            create({
                title: taskState,
                isCompleted: false
            });
            setTaskState('')
        }
    };

    /**
     * handleCompleted
     */
    const handleCompleted = (checked: boolean, index: number) => {
        completeTaskType({
            index: index,
            isCompleted: checked
        });
    };

    /**
     * handleUpdate
     */
    const handleUpdate = (index: number, valueState: string, handleClose: () => void) => {
        if (valueState !== "") {
            updateTaskType({
                index: index,
                title: valueState
            });
        }

        handleClose();
    };

    /**
     * handleDelete
     */
    const handleDelete = (index: number) => {
        deleteIndexTask(index);
    };

    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Card>
                <CardContent>
                    <h2>To-Do</h2>
                    <div className="Form">
                        <form onSubmit={handleSubmit}
                              className={classes.root}
                              noValidate
                              autoComplete="off">

                            <Input className="Form__input"
                                   onChange={handleInput}
                                   placeholder="Enter task name"
                                   inputProps={{'aria-label': 'description'}}
                                   value={taskState}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary">
                                Create task
                            </Button>
                        </form>
                    </div>
                    <List className="TodoList">
                        {todos.map((todoItem, index) =>
                            <TodoItem
                                handleCompleted={handleCompleted}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                                todoItem={todoItem}
                                index={index}
                                key={index}
                            />
                        )}
                    </List>
                </CardContent>
            </Card>
        </>
    );
};


const mapStateToProps = (state: any) => ({
    todos: state.todos.list
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    create: (todo: TodoInterface) => dispatch(createTask(todo)),
    deleteIndexTask: (index: number) => dispatch(deleteTask({ index })),
    completeTaskType: ({index, isCompleted}: CompleteTaskType) => dispatch(completeTask({index, isCompleted})),
    updateTaskType: ({index, title}: UpdateTaskType) => dispatch(updateTask({index, title}))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
