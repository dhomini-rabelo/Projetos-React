import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { InputArea } from '../../components/index/Input'
import { Task } from '../../components/index/Task'
import { Div, H1 } from './App.styles'
import { taskType } from './types'


export const PageContext = createContext({})
export type contextType = { tasks: taskType[], setTasks: Dispatch<SetStateAction<taskType[]>>}


function App() {
  const [tasks, setTasks] = useState<taskType[]>([])
  const contextValue: contextType = { tasks, setTasks }
  
  function addNewTask(text: string) {
    const newTask = { text, done: false }
    setTasks((tasks) => [...tasks, newTask])
  }

  return (
    <PageContext.Provider value={contextValue}>
      <Div.container>
        <Div.content>
      
          <H1.title>Tarefas</H1.title>
      
          <InputArea addNewTask={addNewTask} />
          {tasks.map((task, index)=> <Task key={index} task={task} index={index} />)}
      
        </Div.content>
      </Div.container>
    </PageContext.Provider>
  )
}

export default App
