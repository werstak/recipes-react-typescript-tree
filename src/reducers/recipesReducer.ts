import {SET_RECIPE_BY_CATEGORY, SET_CREATE_RECIPE} from '../constants'
import {IRecipe} from '../interfaces'

const initialState: {list: IRecipe[]} = {
    list: []
}

const categoriesReducer = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case SET_RECIPE_BY_CATEGORY: {
            return {...state, list: payload}
        }
        case SET_CREATE_RECIPE: {
            return {...state, list: [...state.list, payload]}
        }
        default: {
            return state
        }
    }
}

export default categoriesReducer
