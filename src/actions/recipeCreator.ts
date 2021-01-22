import {GET_RECIPE_BY_CATEGORY, SET_RECIPE_BY_CATEGORY, GET_CREATE_RECIPE, SET_CREATE_RECIPE} from '../constants/recipes'
import {IRecipe} from '../interfaces'

export type GetRecipeType = {
    type: string
    payload: string
}

export type SetRecipeType = {
    type: string
    payload: IRecipe
}

export type NewRecipe = {
    title: string
    text: string
    categoryId: string
}

export type SetNewRecipe = {
    type: string
    payload: NewRecipe
}

export const getRecipeByCategory = (payload: string): GetRecipeType => ({
    type: GET_RECIPE_BY_CATEGORY,
    payload
})

export const setRecipeByCategory = (payload: IRecipe): SetRecipeType => ({
    type: SET_RECIPE_BY_CATEGORY,
    payload
})

export const getCreateRecipe = (payload: NewRecipe): SetNewRecipe => ({
    type: GET_CREATE_RECIPE,
    payload
})

export const setCreateRecipe = (payload: IRecipe): SetRecipeType => ({
    type: SET_CREATE_RECIPE,
    payload
})
