import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import {TodoInterface} from '../../../interfaces';
import './TodoItem.css';


/**
 * interfaces
 */
interface PropsTodoItem {
    todoItem: TodoInterface;
    index: number;
    handleDelete: (index: number) => void;
    handleCompleted: (isCompleted: boolean, index: number) => void;
    handleUpdate: (index: number, valueState: string, handleClose: () => void) => void;
}

const TodoItem = ({todoItem, index, handleDelete, handleCompleted, handleUpdate}: PropsTodoItem) => {

    /**
     * Dialog
     */
    const [open, setOpen] = useState(false);
    const [valueState, setValueState]: any = useState(todoItem.title);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // console.log(todoItem)

    return (
        <>
            <ListItem className="TodoItem">
                <span className={todoItem.isCompleted ? 'TodoItem__Completed TodoItem__Title' : 'TodoItem__Title'}>
                    {index+1} Task: {todoItem.title}
                </span>
                <span className="TodoItem__ButtonWrap">
                    <Checkbox
                        color="default"
                        value="default"
                        checked={todoItem.isCompleted}
                        inputProps={{'aria-label': 'checkbox with default color'}}
                        onChange={() => handleCompleted(!todoItem.isCompleted, index)}
                    />
                    <Button onClick={() => handleClickOpen()}>
                        <EditIcon/>
                    </Button>
                    <Button onClick={() => handleDelete(index)}>
                        <DeleteForeverIcon/>
                    </Button>
                </span>
                <Dialog open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                        className="Dialog">
                    <DialogTitle id="form-dialog-title">Update task</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={valueState}
                            onChange={(e) => setValueState(e.target.value)}
                            label="Enter new name task"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => handleUpdate(index, valueState, handleClose)} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
            </ListItem>
            <Divider/>
        </>
    )
};

export default TodoItem;
