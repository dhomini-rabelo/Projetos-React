import { categoryType } from "./types";


export const categories: categoryType = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    loss: { title: 'Perda', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    gain: { title: 'Ganho', color: 'green', expense: false },
}