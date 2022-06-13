import styled from 'styled-components'


export const Div = {
    container: styled.div`
        p {
            font-size: 13px;
            color: #b8b8d4;
        }

        h1 {
            font-size: 26px;
        }

        hr {
            height: 1px;
            border: none;
            background-color: #16195c;
            margin: 30px 0;
        }

        label {
            font-size: 13px;

            input {
                margin-top: 7px;
                display: block;
                width: 100%;
                padding: 20px 10px;
                border: 2px solid #25cd89;
                border-radius: 10px;
                color: white;
                outline: none;
                font-size: 15px;
                background-color: #02044a;
            }

        }

        button {
            background-color: #25cd89;
            color: white;
            font-size: 14px;
            font-weight: bold;
            padding: 20px 40px;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            margin-top: 30px;
        }
    `,
}