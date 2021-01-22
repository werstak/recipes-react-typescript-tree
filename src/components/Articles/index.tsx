import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {getArticleByCategory, getCreateArticle} from '../../actions/articleCreator'
import AddIcon from '@material-ui/icons/Add'
import {Card, CardContent, CardActionArea, IconButton, Button, Typography, TextField} from '@material-ui/core'
import {IArticle} from '../../interfaces'

interface ArticlesProps {
    slug: string
    getArticleByCategory: (id: string) => void
    getCreateArticle: (payload: any) => void
    articles: IArticle[]
}

const Articles = ({slug, getArticleByCategory, getCreateArticle, articles}: ArticlesProps) => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        getArticleByCategory(slug)
    }, [getArticleByCategory, slug])

    const handleCreate = () => {
        setOpen(true)
    }

    const handleSubmit = () => {
        setOpen(false)
        getCreateArticle({title, text, description, categoryId: slug})
    }

    return (
        <div>
            <div>
                <span>Articles</span>
                <IconButton aria-label="addIcon" onClick={handleCreate}>
                    <AddIcon fontSize="small" />
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
                            Create new Article
                        </Button>
                    </div>
                </form>
            )}
            <div>
                {articles.length !== 0 && (
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                {articles.map(item => (
                                    <div key={item._id} style={{marginBottom: '10px'}}>
                                        <Typography variant="body1" color="initial">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" color="primary">
                                            {item.text}
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
    articles: state.articles.list
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getArticleByCategory: (payload: string) => dispatch(getArticleByCategory(payload)),
    getCreateArticle: (payload: any) => dispatch(getCreateArticle(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
