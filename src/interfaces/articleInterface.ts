export interface IArticle {
    _id: string;
    title: string;
    text: string;
    description: string;
    categoryId?: string;
    isDeleted: boolean;
    updatedAt: string;
    createdAt: string;
    __v: number;
}
