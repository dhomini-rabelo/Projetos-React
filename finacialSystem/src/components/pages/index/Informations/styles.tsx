import styled from 'styled-components'


export const Div = {
    container: styled.div`
        background-color: #fff;
        box-shadow: 0 0 0 2px #ccc;
        border-radius: 10px;
        padding: 20px;
        margin-top: -130px;
        display: flex;
        align-items: center;
    `,

    monthContainer: styled.div`
        flex: 1;
        display: flex;
        align-items: center;
    `,
    
    monthArrow: styled.div`
        width: 40px;
        text-align: center;
        font-size: 65;
        cursor: pointer;
    `,
    
    monthTitle: styled.div`
        flex: 1;
        text-align: center;
    `,

    resumeContainer: styled.div`
        flex: 2;
        display: flex;
    `,
}