import {
    SET_CATEGORIES,
    GET_CATEGORIES,
    REMOVE_CATEGORY,
    CREATE_CATEGORY,
    SET_CATEGORY,
    SET_UPDATED_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES_NESTED,
    SET_CATEGORIES_NESTED,
    UPDATE_CATEGORY,
} from '../constants'
import {CategoriesInterface} from '../interfaces'

export interface ActionTypeBase {
    type: string
    payload: CategoriesInterface
}

export const getCategories = () => ({
    type: GET_CATEGORIES
})

export const setCategories = (payload: CategoriesInterface): ActionTypeBase => ({
    type: SET_CATEGORIES,
    payload
})

export const createCategory = (payload: CategoriesInterface) => ({
    type: CREATE_CATEGORY,
    payload
})

export const updateCategory = (payload: CategoriesInterface) => ({
    type: UPDATE_CATEGORY,
    payload
})

export const setUpdatedCategory = (payload: CategoriesInterface) => ({
    type: SET_UPDATED_CATEGORY,
    payload
})

export const setCategory = (payload: CategoriesInterface) => ({
    type: SET_CATEGORY,
    payload
})

export const deleteCategory = (payload: string) => ({
    type: DELETE_CATEGORY,
    payload
})

export const removeCategory = (payload: string) => ({
    type: REMOVE_CATEGORY,
    payload
})

export const getBreadcrumbs = (payload: string) => ({
    type: GET_CATEGORIES_NESTED,
    payload
})

export const setBreadcrumbs = (payload: string) => ({
    type: SET_CATEGORIES_NESTED,
    payload
})
