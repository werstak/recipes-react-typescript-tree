import {ICategory} from '../interfaces';

export const createTree = (list: ICategory[]) => {
    let map = {},
        node: ICategory,
        roots: ICategory[] = [],
        i: number
    for (i = 0; i < list.length; i += 1) {
        map[list[i]._id] = i
        list[i].children = []
    }
    for (i = 0; i < list.length; i += 1) {
        node = list[i]
        if (node.parentId) {
            (list[map[node.parentId]].children as ICategory[]).push(node)
        } else {
            roots.push(node)
        }
    }

    return roots
}
