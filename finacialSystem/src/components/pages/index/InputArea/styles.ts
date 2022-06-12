import styled from 'styled-components'


export const Div = {
    container: styled.div`
        background-color: #fff;
        box-shadow: 0 0 0 2px #ccc;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
        display: flex;
        align-items: stretch;
        justify-content: center;
    `,

    item: styled.div`
        flex: 1;
        font-weight: 600;
        color: black;
        display: flex;
        flex-flow: column wrap;
        margin: 0.1rem 0.2rem;

        input, select {
            height: 1.6rem;
            border: 0 0 0 0.4px #ddd;
            text-indent: 0.2rem;
        }
        
        label {
            margin-bottom: 0.4rem;
        }

        select {
            height: 2rem;
        }

        button {
            margin-top: auto;
            background-color: #7dcdec;
            border: none;
            border-radius: 2px;
            height: 2rem;
        }
    `,

}