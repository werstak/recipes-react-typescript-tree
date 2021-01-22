import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import {Card, CardContent, CardActionArea, IconButton, Typography, TextField, Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import {getRecipeByCategory, getCreateRecipe} from '../../actions/recipeCreator'
import {IRecipe} from '../../interfaces'

interface RecipesProps {
    slug: string
    getRecipeByCategory: (id: string) => void
    getCreateRecipe: (payload: any) => void
    recipes: IRecipe[]
}

const Recipes = ({slug, getRecipeByCategory, getCreateRecipe, recipes}: RecipesProps) => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        getRecipeByCategory(slug)
    }, [getRecipeByCategory, slug])

    const handleCreate = () => {
        setOpen(true)
    }

    const handleSubmit = () => {
        setOpen(false)
        getCreateRecipe({title, text, description, categoryId: slug})
    }

    return (
        <div>
            <div>
                <span>Recipes</span>
                <IconButton aria-label="addIcon" onClick={handleCreate}>
                    <AddIcon fontSize="small"/>
                </IconButton>
            </div>

            {open && (
                <form noValidate autoComplete="off" onSubmit={handleSubmit} style={{marginBottom: '10px'}}>
                    <div style={{marginBottom: '10px'}}>
                        <TextField
                            id="title"
                            label="Enter title"
                            variant="outlined"
                            value={title}
                            fullWidth
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <TextField
                            id="text"
                            label="Enter text"
                            multiline
                            fullWidth
                            rowsMax="4"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            variant="outlined"
                        />
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <TextField
                            id="description"
                            label="Enter description"
                            fullWidth
                            value={description}
                            variant="outlined"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button variant="outlined" color="primary" type="submit">
                            Create new Recipe
                        </Button>
                    </div>
                </form>
            )}

            <div>
                {recipes.length !== 0 && (
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                {recipes.map(item => (
                                    <div key={item._id}>
                                        <Typography variant="body1" color="initial">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" color="primary">
                                            {item.text}
                                        </Typography>
                                        <Typography variant="body1" color="primary">
                                            {item.description}
                                        </Typography>
                                    </div>
                                ))}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    recipes: state.recipes.list
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getRecipeByCategory: (payload: string) => dispatch(getRecipeByCategory(payload)),
    getCreateRecipe: (payload: any) => dispatch(getCreateRecipe(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)
