import {fork} from 'redux-saga/effects'
import category from './category'
import article from './article'
import recipe from './recipe'

function* root() {
    yield fork(category)
    yield fork(article)
    yield fork(recipe)
}

export default root
