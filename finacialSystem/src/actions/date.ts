import { itemType } from "../data/types"


let fdm = (dayOrMonth: number) => dayOrMonth >= 10 ? dayOrMonth : `0${dayOrMonth}` // format day or month

export function getCurrentMonth() {
    const now = new Date()
    return `${now.getFullYear()}-${fdm(now.getMonth()+1)}`
}

export function getMonthFormat(month: number, year: number): string {
    const customDate = new Date(year, month, 1)
    return `${customDate.getFullYear()}-${fdm(customDate.getMonth()+1)}`
}

export function filterListByMonth(itemsList: Array<itemType>, date: string): Array<itemType> {
    let filteredList: Array<itemType> = []
    let [year, month] = date.split('-')

    itemsList.forEach((item) => {
        if ((item.date.getFullYear() === parseInt(year) && (item.date.getMonth()+1 === parseInt(month)))){
            filteredList.push(item)
        }
    })
    
    return filteredList
}


export function formatDate(date: Date): string {
    let [day, month, year] = [date.getDate(), date.getMonth()+1, date.getFullYear()]
    return `${fdm(day)}/${fdm(month)}/${year}`
}


export function getMonthName(date: string): string {
    let [year, month] = date.split('-')
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month) - 1]} de ${year}`
}