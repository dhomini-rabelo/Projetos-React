import { useRef, KeyboardEvent } from 'react'
import { Div } from './styles'



export function InputArea({ addNewTask }: { addNewTask: (text: string) => void }) {
    const inputRef = useRef(null)
    const resetInputText = () => { inputRef.current.value = '' }

    function handleKeyUp (e: KeyboardEvent) {
        if (e.code === 'Enter' && inputRef.current.value !== ''){
            addNewTask(inputRef.current.value)
            resetInputText()
        }
    }
    
    
    return (
        <Div.inputContainer> 
            <input ref={inputRef} type="text" name="task" id="task" placeholder="Adicione uma tarefa" onKeyUp={(e) => handleKeyUp(e)} />
            <div className="add">➕</div>
        </Div.inputContainer>
    )
}