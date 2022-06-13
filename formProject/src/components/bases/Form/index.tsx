import { ReactNode } from "react";
import { FormProvider } from "../../../contexts/form";
import { Div, Nav } from "./styles";


export function FormPageBase({ children }: { children: ReactNode }) {
    return (
        <Div.body>
            <Div.container>
                <Div.header><h1>Cadastro Dev</h1></Div.header>
                <Div.main>
                    <Nav.formStep>...</Nav.formStep>
                    <Div.formPage>{children}</Div.formPage> 
                </Div.main>
            </Div.container>
        </Div.body>
    )
}