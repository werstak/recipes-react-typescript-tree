import {SET_CATEGORIES, SET_CATEGORY, SET_UPDATED_CATEGORY, REMOVE_CATEGORY, SET_CATEGORIES_NESTED} from '../constants'
import {ICategory} from '../interfaces/categoriesInterface'

const initialState: {list: ICategory[]; nested: any} = {
    list: [],
    nested: []
}

const categoriesReducer = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case SET_CATEGORIES: {
            return {...state, list: payload}
        }
        case SET_CATEGORY: {
            return {...state, list: [...state.list, payload]}
        }
        case REMOVE_CATEGORY: {
            return {...state, list: state.list.filter(item => item._id !== payload)}
        }
        case SET_UPDATED_CATEGORY: {
            return {
                ...state,
                list: state.list.map(item => {
                    if (item._id === payload._id) {
                        return payload
                    }
                    return item
                })
            }
        }
        case SET_CATEGORIES_NESTED: {
            return {...state, nested: payload}
        }
        default: {
            return state
        }
    }
}

export default categoriesReducer
