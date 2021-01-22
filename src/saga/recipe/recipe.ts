import {call, put, takeLatest} from 'redux-saga/effects'

import {setRecipeByCategory, setCreateRecipe} from '../../actions/recipeCreator'
import {SERVER_URL, GET_RECIPE_BY_CATEGORY, GET_CREATE_RECIPE} from '../../constants'

/* eslint no-console: 0 */
function* fetchGetRecipeByCategory({payload}) {
    const result = yield call(fetch, `${SERVER_URL}/recipe/byCategory/${payload}`)

    if (result.status === 200) {
        const data = yield result.json()

        yield put(setRecipeByCategory(data))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchGetRecipeByCategoryFork() {
    yield takeLatest(GET_RECIPE_BY_CATEGORY as any, fetchGetRecipeByCategory)
}

function* fetchCreateRecipe({payload}) {
    const result = yield call(fetch, `${SERVER_URL}/recipe/create`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (result.status === 200) {
        const data = yield result.json()

        yield put(setCreateRecipe(data))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchCreateRecipeFork() {
    yield takeLatest(GET_CREATE_RECIPE as any, fetchCreateRecipe)
}
