import {fork} from 'redux-saga/effects'
import {fetchGetArticleByCategoryFork, fetchCreateRecipeFork} from './article'

export default function*() {
    yield fork(fetchGetArticleByCategoryFork)
    yield fork(fetchCreateRecipeFork)
}
