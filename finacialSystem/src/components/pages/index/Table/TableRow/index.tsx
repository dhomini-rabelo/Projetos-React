import { formatDate } from "../../../../../actions/date";
import { categories } from "../../../../../data/categories";
import { itemType } from "../../../../../data/types";
import { Div, Td, Tr } from "./styles";

export function TableRow({ item }: { item: itemType }) {
    return (
        <Tr.content>
            <Td.column>{formatDate(item.date)}</Td.column>
            <Td.column><Div.category color={categories[item.category].color}>{categories[item.category].title}</Div.category></Td.column>
            <Td.column>{item.title}</Td.column>
            <Td.column><Div.value color={categories[item.category].expense ? 'red': 'green'}>R$ {item.value}</Div.value></Td.column>
        </Tr.content>
    ) 
}