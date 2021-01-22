export interface CategoriesInterface {
    _id?: string;
    title?: string;
    parentId?: string;
    isDeleted?:	boolean;
    createdAt?:	string;
    updatedAt?:	string;
}

export interface ICategory {
    _id: string;
    title: string;
    isDeleted: boolean;
    parentId: string;
    updatedAt: string;
    createdAt: string;
    __v: number;
    children: [];
}
