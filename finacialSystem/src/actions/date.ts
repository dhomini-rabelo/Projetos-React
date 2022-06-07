import { itemType } from "../data/types"


export function getCurrentMonth() {
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export function filterListByMonth(itemsList: Array<itemType>, date: string): Array<itemType> {
    let filteredList: Array<itemType> = []
    let [year, month] = date.split('-')

    itemsList.forEach((item) => {
        if ((item.date.getFullYear() === parseInt(year) && (item.date.getMonth()+1 === parseInt(month)))){
            filteredList.push(item)
        }
    })
    
    return itemsList
}


export function formatDate(date: Date): string {
    let [day, month, year] = [date.getDate(), date.getMonth()+1, date.getFullYear()]
    let fdm = (dayOrMonth: number) => dayOrMonth >= 10 ? dayOrMonth : `0${dayOrMonth}` // format day or month
    return `${fdm(day)}/${fdm(month)}/${year}`
}