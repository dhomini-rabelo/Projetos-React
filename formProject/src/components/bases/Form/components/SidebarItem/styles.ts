import styled from 'styled-components'


export const Div = {

    container: styled.div`
        margin: 30px;
        cursor: pointer;

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
        }
    `,

    info: styled.div`
        flex: 1;
        margin-right: 20px;
    `,

    title: styled.div`
        text-align: right;
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 15px;
        color: #FFF;
    `,

    description: styled.div`
        text-align: right;
        font-size: 13px;
        color: #B8B8D4;
    `,

    iconContainer: styled.div(({ active }: { active: boolean }) => `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: ${active ? '#25CD89' : '#494A7C'};
        display: flex;
        justify-content: center;
        align-items: center;
    `),

    point: styled.div(({ active }: { active: boolean }) =>`
        width: 12px;
        height: 12px;
        border: 3px solid #494A7C;
        border-radius: 50%;
        margin-left: 30px;
        margin-right: -6px;
        background-color: ${active ? '#25CD89' : '#02044A'};
    `),

}