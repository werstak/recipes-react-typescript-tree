import {SET_ARTICLE_BY_CATEGORY, SET_CREATE_ARTICLE} from '../constants'
import {IArticle} from '../interfaces'

const initialState: {list: IArticle[]} = {
    list: []
}

const categoriesReducer = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case SET_ARTICLE_BY_CATEGORY: {
            return {...state, list: payload}
        }
        case SET_CREATE_ARTICLE: {
            return {...state, list: [...state.list, payload]}
        }
        default: {
            return state
        }
    }
}

export default categoriesReducer
