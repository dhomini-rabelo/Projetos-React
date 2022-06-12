import { useState } from "react";
import { Div } from "./styles";

export function ResumeItem ({ title, value, color }: { title: string, value: number, color: string }) {
    return (
        <Div.container>
            <Div.title>{title}</Div.title>
            <Div.value color={color}>R$ {value.toFixed(2)}</Div.value>
        </Div.container>
    )
}