import { ReactNode } from "react";
import { FormContextType, FormProvider, useFormContext } from "../../../contexts/form";
import { SidebarItem } from "./components/SidebarItem";
import { Div, Nav } from "./styles";


export function FormPageBase({ children }: { children: ReactNode }) {
    let { formData } = useFormContext() as FormContextType
    
    return (
        <Div.body>
            <Div.container>
                <Div.header><h1>Cadastro Dev</h1></Div.header>
                <Div.main>
                    <Nav.formStep>
                    <SidebarItem
                        title="Pessoal"
                        description="Se identifique"
                        icon="profile"
                        path="/"
                        active={formData.currentStep === 1}
                    />

                    <SidebarItem
                        title="Profissional"
                        description="Seu nível"
                        icon="book"
                        path="/step2"
                        active={formData.currentStep === 2}
                    />

                    <SidebarItem
                        title="Contatos"
                        description="Como te achar"
                        icon="mail"
                        path="/step3"
                        active={formData.currentStep === 3}
                    />
                    </Nav.formStep>
                    <Div.formPage>{children}</Div.formPage> 
                </Div.main>
            </Div.container>
        </Div.body>
    )
}