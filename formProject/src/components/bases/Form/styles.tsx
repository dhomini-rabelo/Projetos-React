import styled from 'styled-components'


export const Div = {
    body: styled.div`
        background-color: #02044A;
        color: #fff;
        min-height: 100vh;
    `,

    container: styled.div`
        margin: auto;
        max-width: 1024px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    `,

    main: styled.main`
        flex: 1;
        display: flex;
    `,

    formPage: styled.div`
        flex: 1;
        padding-left: 40px;
        padding-top: 40px;
    `,

    header: styled.header`
        padding: 25px 0;
        border-bottom:  1px solid #16195C;

        h1 {
            font-size: 28px;
        }
    `,

}


export const Nav = {
    formStep: styled.nav`
        width: 250px;
        border-right: 1px solid #16195C;
    `,
}