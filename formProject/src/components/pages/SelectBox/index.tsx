import { Div } from "./styles";

export function SelectBox({ title, description, icon, selected, onClick }: { title: string, description: string, icon: string, selected: boolean, onClick: () => void }) {
    return (
        <Div.container selected={selected} onClick={onClick}>
            <Div.icon>{icon}</Div.icon>
            <Div.info>
                <Div.title>{title}</Div.title>
                <Div.description>{description}</Div.description>
            </Div.info>
        </Div.container>
    )
}