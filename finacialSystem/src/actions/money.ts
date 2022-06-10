import { itemType } from "../data/types";
import { categories } from "../data/categories";

export function getMoneyReport(data: itemType[]): { income: number, expense: number } {
    let income = 0 
    let expense = 0 
    
    data.forEach((item) => {
        if (categories[item.category].expense) {
            expense += item.value
        } else {
            income += item.value
        }
    })

    return {
        income,
        expense,
    }
}