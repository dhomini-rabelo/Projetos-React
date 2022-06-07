import styled from 'styled-components'

export const Tr = {
    content: styled.tr``
}

export const Td = {
    column: styled.td`
        padding: 10px 0;
    `
}
export const Div = {
    category: styled.div(({ color }: { color: string }) => `
        display: inline-block;
        padding: 5px 10px;
        border-radius: 5px;
        color: #fff;
        background-color: ${color};
    `),

    value: styled.div(( { color }: { color: string } ) => `
        color: ${color};
    `),
}