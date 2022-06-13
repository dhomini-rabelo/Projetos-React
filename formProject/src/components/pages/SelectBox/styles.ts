import styled from 'styled-components'


export const Div = {
    container: styled.div`
      display: flex;
      border: 2px solid #16195c;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 15px;
      align-items: center;
      cursor: pointer;

      &:hover {
        border: 2px solid #496459;
      }
    `,

    icon: styled.div`
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #191a59;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
    `,

    info: styled.div`
        flex: 1;
        margin-left: 20px;
    `,

    title: styled.div`
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 7px;
    `,

    description: styled.div`
        font-size: 14px;
        color: #b8b8b4;
    `,

}