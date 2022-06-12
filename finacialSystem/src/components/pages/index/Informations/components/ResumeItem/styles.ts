import styled from 'styled-components'



export const Div = {
    container: styled.div`
        flex: 1;
    `,

    title: styled.div`
        text-align: center;
        font-weight: bold;
        color: #000;
        margin-bottom: 5px;
        `,

    value: styled.div(({ color }: { color: string }) => `
        text-align: center;
        font-weight: bold;
        color: ${color};
    `),
}