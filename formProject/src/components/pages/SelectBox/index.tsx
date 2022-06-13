import { Div } from "./styles";

export function SelectBox({ title, description, icon }: { title: string, description: string, icon: string }) {
    return (
        <Div.container>
            <Div.icon>{icon}</Div.icon>
            <Div.info>
                <Div.title>{title}</Div.title>
                <Div.description>{description}</Div.description>
            </Div.info>
        </Div.container>
    )
}