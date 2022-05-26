import styled from 'styled-components'



export const Div = {

    taskContainerVariable: styled.div(({ checked }: { checked: boolean }) => `
        display: flex;
        align-items: center;
        background-color: #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;

        input {
            margin-right: 8px;
            width: 25px;
            height: 25px;
        }

        label {
            color: #ccc;
            text-decoration: ${checked ? 'line-through' : 'initial'};
        }
    `),



}