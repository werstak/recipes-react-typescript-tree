import {call, put, takeLatest} from 'redux-saga/effects'

import {
    setCategories,
    setCategory,
    setUpdatedCategory,
    removeCategory,
    setBreadcrumbs
} from '../../actions/categoriesCreator'
import {
    GET_CATEGORIES,
    SERVER_URL,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES_NESTED
} from '../../constants'

/* eslint no-console: 0 */
function* fetchGetCategories() {
    const result = yield call(fetch, `${SERVER_URL}/category/all`)

    if (result.status === 200) {
        const data = yield result.json()

        yield put(setCategories(data))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchGetCategoriesFork() {
    yield takeLatest(GET_CATEGORIES, fetchGetCategories)
}

function* fetchCreateCategory({payload}) {
    const result = yield call(fetch, `${SERVER_URL}/category/create`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (result.status === 200) {
        const data = yield result.json()

        yield put(setCategory(data))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchCreateCategoryFork() {
    yield takeLatest(CREATE_CATEGORY as any, fetchCreateCategory)
}

function* fetchUpdateCategory({payload}) {
    const result = yield call(fetch, `${SERVER_URL}/category/update`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (result.status === 200) {
        const data = yield result.json()

        yield put(setUpdatedCategory(data))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchUpdateCategoryFork() {
    yield takeLatest(UPDATE_CATEGORY as any, fetchUpdateCategory)
}

function* fetchDeleteCategory({payload}) {
    const result = yield call(fetch, `${SERVER_URL}/category/${payload}`, {method: 'DELETE'})

    if (result.status === 200) {
        yield put(removeCategory(payload))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchDeleteCategoryFork() {
    yield takeLatest(DELETE_CATEGORY as any, fetchDeleteCategory)
}

function* fetchGetCategoryNested({payload}) {
    console.log('payload', payload)
    const result = yield call(fetch, `${SERVER_URL}/category/categoryList/${payload}`)

    if (result.status === 200) {
        const data = yield result.json()

        console.log('data setCategoriesNested', data)

        yield put(setBreadcrumbs(data))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchGetCategoryNestedFork() {
    yield takeLatest(GET_CATEGORIES_NESTED as any, fetchGetCategoryNested)
}
