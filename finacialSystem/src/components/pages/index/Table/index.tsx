import { itemType } from "../../../../data/types"
import { Table, TableHeadColumn } from "./styles"
import { TableRow } from "./TableRow"


export function TableComponent({data}: { data: itemType[] }) {
    return (
        <Table>
            <thead>
                <TableHeadColumn width={100}>Data</TableHeadColumn>
                <TableHeadColumn width={130}>Categoria</TableHeadColumn>
                <TableHeadColumn>Título</TableHeadColumn>
                <TableHeadColumn width={150}>Valor</TableHeadColumn>
            </thead>
            <tbody>
                {data.map((item, index) => <TableRow item={item} key={index} />)}
            </tbody>
        </Table>
    )
}