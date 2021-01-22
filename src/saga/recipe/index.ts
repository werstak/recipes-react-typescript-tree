import {fork} from 'redux-saga/effects'
import {fetchGetRecipeByCategoryFork, fetchCreateRecipeFork} from './recipe'

export default function*() {
    yield fork(fetchGetRecipeByCategoryFork)
    yield fork(fetchCreateRecipeFork)
}
