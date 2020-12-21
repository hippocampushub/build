const sortedArray = (items: any[], field: string) => {
    return items.sort((item1, item2) => {
        return item1[field] === item2[field] ? 0 : (item1[field] > item2[field] ? 1 : -1)
    });
}

export {
    sortedArray
}
