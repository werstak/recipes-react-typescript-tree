import {fork} from 'redux-saga/effects'
import {
    fetchGetCategoriesFork,
    fetchCreateCategoryFork,
    fetchUpdateCategoryFork,
    fetchDeleteCategoryFork,
    fetchGetCategoryNestedFork
} from './category'

export default function*() {
    yield fork(fetchGetCategoriesFork)
    yield fork(fetchCreateCategoryFork)
    yield fork(fetchUpdateCategoryFork)
    yield fork(fetchDeleteCategoryFork)
    yield fork(fetchGetCategoryNestedFork)
}
