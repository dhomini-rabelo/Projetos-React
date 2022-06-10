import { Div } from "./styles";

export function ResumeItem ({ title, value }: { title: string, value: number }) {
    return (
        <Div.container>
            <Div.title>{title}</Div.title>
            <Div.value>R$ {value}</Div.value>
        </Div.container>
    )
}