import { useContext, useState } from "react";
import { contextType, PageContext } from "../../../pages/index/App";
import { taskType } from "../../../pages/index/types";
import { Div } from './styles'


export function Task({ task: { text, done }, index }: { task: taskType, index: number }) {
    const [checked, setChecked] = useState<boolean>(done)
    const context: contextType = useContext(PageContext) as contextType
    
    function updateChecked(newState: boolean) {
        context.setTasks((tasks) => {
            tasks[index].done = !tasks[index].done
            return tasks
        })
        setChecked(newState)
    }
    
    console.log(context.tasks)

    return (
        <Div.taskContainerVariable checked={checked}>
            <input type="checkbox" name="done" id="done" checked={checked} onChange={e => updateChecked(e.target.checked)} />
            <label>{text}</label>
        </Div.taskContainerVariable>
    )
}