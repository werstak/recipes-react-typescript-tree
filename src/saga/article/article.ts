import {call, put, takeLatest} from 'redux-saga/effects'

import {setArticleByCategory, setCreateArticle} from '../../actions/articleCreator'
import {SERVER_URL, GET_ARTICLE_BY_CATEGORY, GET_CREATE_ARTICLE} from '../../constants'

/* eslint no-console: 0 */
function* fetchGetArticleByCategory({payload}) {
    const result = yield call(fetch, `${SERVER_URL}/article/byCategory/${payload}`)

    if (result.status === 200) {
        const data = yield result.json()

        yield put(setArticleByCategory(data))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchGetArticleByCategoryFork() {
    yield takeLatest(GET_ARTICLE_BY_CATEGORY as any, fetchGetArticleByCategory)
}

function* fetchCreateArticle({payload}) {
    const result = yield call(fetch, `${SERVER_URL}/article/create`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (result.status === 200) {
        const data = yield result.json()

        yield put(setCreateArticle(data))
    } else {
        console.log('Something wrong.')
    }
}

export function* fetchCreateRecipeFork() {
    yield takeLatest(GET_CREATE_ARTICLE as any, fetchCreateArticle)
}
