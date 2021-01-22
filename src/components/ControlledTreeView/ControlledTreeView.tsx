import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux'
import {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {ICategory} from "../../interfaces";
import {createTree} from '../../utils';
import {getCategories, createCategory, updateCategory, deleteCategory} from '../../actions/categoriesCreator'
import CategoriesTreeItem from './TreeItem/CategoriesTreeItem'
import {Popup} from '../Popup'
import './ControlledTreeView.css';

const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    },
});

interface PropsControlledTreeView {
    categories: ICategory[];
    getCategories: () => void;
    createCategory: (payload: NewCategory | null) => void;
    updateCategory: (payload: ICategory) => void;
    deleteCategory: (id: string) => void;
}

type NewCategory = {
    parentId: string
    title: string
}

const ControlledTreeView = ({categories, getCategories, createCategory, updateCategory, deleteCategory}: PropsControlledTreeView) => {

    const [openUpdate, setOpenUpdate] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);
    const [currentItem, setCurrentItem] = useState<ICategory | null>(null)
    const [newItem, setNewItem] = useState<NewCategory | null>(null)

    const handleOpenUpdate = (item: ICategory) => {
        setCurrentItem(item)
        setOpenUpdate(true);
    };

    const handleCloseUpdate = () => {
        setCurrentItem(null)
        setOpenUpdate(false);
    };

    const handleOpenCreate = (itemId: string) => {
        setNewItem({parentId: itemId, title: ''})
        setOpenCreate(true)
    }

    const handleCloseCreate = () => {
        setNewItem(null)
        setOpenCreate(false)
    }

    React.useEffect(() => {
        getCategories();
    }, [getCategories]);

    if (categories.length === 0) {
        return <div>Loading...</div>
    }

    const handleCreateCategory = () => {
        createCategory(newItem);
        handleCloseCreate()
    }

    const handleDeleteCategory = (id: string) => {
        deleteCategory(id);
    }

    const handleUpdateCategory = () => {
        updateCategory(currentItem as ICategory);
        handleCloseUpdate()
    }

    const changeUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentItem({...currentItem, title: e.target.value} as ICategory)
    }

    const changeCreateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem({...newItem, title: e.target.value} as NewCategory)
    }

    const renderTree = (treeItems: ICategory[]) => {
        return treeItems.map((treeItemData) => {
            let children: JSX.Element[] = [];

            if (treeItemData.children && treeItemData.children.length > 0) {
                children = renderTree(treeItemData.children);
            }

            return (
                <CategoriesTreeItem
                    key={treeItemData._id}
                    item={treeItemData}
                    children={children}
                    onCreate={handleOpenCreate}
                    onUpdate={handleOpenUpdate}
                    onDelete={handleDeleteCategory}
                />
            )
        });
    };

    const DataTreeView = ({treeItems}: { treeItems: ICategory[] }) => {
        return (
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}
            >
                {renderTree(treeItems)}
            </TreeView>
        );
    };

    return (
        <>
            <Popup
                title="Update Category"
                label="Change category name"
                btns={[
                    {title: 'Cancel', handler: handleCloseUpdate},
                    {title: 'Update', handler: handleUpdateCategory}
                ]}
                open={openUpdate}
                onClose={handleCloseUpdate}
                onChange={changeUpdateHandler}
                item={currentItem}
            />
            <Popup
                title="Create new Category"
                label="Enter new category name"
                btns={[
                    {title: 'Cancel', handler: handleCloseCreate},
                    {title: 'Create', handler: handleCreateCategory}
                ]}
                open={openCreate}
                onClose={handleCloseCreate}
                onChange={changeCreateHandler}
                item={newItem}
            />
            <DataTreeView
                treeItems={categories}
            />
        </>
    );
};

const mapStateToProps = (state: any) => ({
    categories: createTree(state.categories.list)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getCategories: () => dispatch(getCategories()),
    createCategory: (payload) => dispatch(createCategory(payload)),
    updateCategory: (payload) => dispatch(updateCategory(payload)),
    deleteCategory: (id: string) => dispatch(deleteCategory(id))
});

// const mapDispatchToProps = {
//     getCategories,
//     createCategory,
//     updateCategory,
//     deleteCategory
// };

export default connect(mapStateToProps, mapDispatchToProps)(ControlledTreeView);
