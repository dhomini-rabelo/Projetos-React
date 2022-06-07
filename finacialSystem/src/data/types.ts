export interface itemType {
    date: Date,
    category: string,
    title: string,
    value: number,
}

export interface categoryType {
    [key: string]: {
        title: string,
        color: string,
        expense: boolean,
    }
}