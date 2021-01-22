import * as React from 'react'
import {NavLink} from 'react-router-dom'

import TreeItem from '@material-ui/lab/TreeItem'
import IconButton from '@material-ui/core/IconButton'
import {Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon, FolderOpen as FolderOpenIcon} from '@material-ui/icons'

import {ICategory} from '../../../interfaces'
import './CategoriesTreeItem.css'

interface PropsTreeItem {
    item: ICategory
    children: any
    onCreate: (id: string) => void
    onUpdate: (item: ICategory) => void
    onDelete: (id: string) => void
}

const CategoriesTreeItem = ({item, children, onCreate, onUpdate, onDelete}: PropsTreeItem) => {
    return (
        <React.Fragment key={item._id}>
            <div className="TitleWrap">
                <TreeItem
                    nodeId={item._id}
                    label={item.title}
                    children={children}
                />
                <NavLink exact to={`/category/${item._id}`}>
                    <FolderOpenIcon fontSize="small"/>
                </NavLink>
                <div className="Btn-box">
                    <IconButton aria-label="addIcon" onClick={() => onCreate(item._id)}>
                        <AddIcon fontSize="small"/>
                    </IconButton>
                    <IconButton aria-label="editIcon" onClick={() => onUpdate(item as ICategory)}>
                        <EditIcon fontSize="small"/>
                    </IconButton>
                    <IconButton aria-label="deleteIcon" onClick={() => onDelete(item._id)}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CategoriesTreeItem
