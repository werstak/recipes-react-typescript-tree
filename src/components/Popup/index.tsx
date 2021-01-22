import React, {ChangeEvent} from 'react'
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'
import {ICategory} from '../../interfaces'

interface IPopup {
    open: boolean
    title: string
    label: string
    btns: {title: string, parentId: string}[]
    onClose: () => void
    item: ICategory
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Popup = ({open, onClose, item, onChange, title, label, btns}) => {
    if (!open) return null

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" className="Dialog">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    value={item && item.title}
                    onChange={onChange}
                    label={label}
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                {btns.map(({title, handler}) => (
                    <Button key={title} onClick={handler} color="primary">
                        {title}
                    </Button>
                ))}
            </DialogActions>
        </Dialog>
    )
}
