import {GET_ARTICLE_BY_CATEGORY, SET_ARTICLE_BY_CATEGORY, GET_CREATE_ARTICLE, SET_CREATE_ARTICLE} from '../constants/articles'
import {IArticle} from '../interfaces'

export type GetArticleType = {
    type: string
    payload: string
}

export type SetArticleType = {
    type: string
    payload: IArticle
}

export type NewArticle = {
    title: string
    text: string
    description: string
    categoryId: string
}

export type SetNewArticle = {
    type: string
    payload: IArticle
}

export const getArticleByCategory = (payload: string): GetArticleType => ({
    type: GET_ARTICLE_BY_CATEGORY,
    payload
})

export const setArticleByCategory = (payload: IArticle): SetArticleType => ({
    type: SET_ARTICLE_BY_CATEGORY,
    payload
})

export const getCreateArticle = (payload: any): SetNewArticle => ({
    type: GET_CREATE_ARTICLE,
    payload
})

export const setCreateArticle = (payload: IArticle): SetArticleType => ({
    type: SET_CREATE_ARTICLE,
    payload
})
