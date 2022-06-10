import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { filterListByMonth, getCurrentMonth } from '../../actions/date'
import { InformationContainer } from '../../components/pages/index/Informations'
import { TableComponent } from '../../components/pages/index/Table'
import { items } from '../../data/items'
import { itemType } from '../../data/types'
import { Div, H1 } from './App.styles'



export const PageContext = createContext({})
export type contextType = { 
  data: itemType[], setData: Dispatch<SetStateAction<itemType[]>>, 
  currentMonth: string, setCurrentMonth: Dispatch<SetStateAction<string>>,
  filteredList: itemType[], setFilteredList: Dispatch<SetStateAction<itemType[]>>,
}

function App() {
  const [data, setData] = useState<itemType[]>(items)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [filteredList, setFilteredList] = useState<itemType[]>(filterListByMonth(data, currentMonth))
  const contextValue: contextType = { data, setData, currentMonth, setCurrentMonth, filteredList, setFilteredList }  

  return (
    <PageContext.Provider value={contextValue}>
      <Div.container>
        <Div.header>
          <H1.title>Sistema financeiro</H1.title>
        </Div.header>

        <Div.main>
          <InformationContainer />
          <TableComponent data={filteredList} />
        </Div.main>
      </Div.container>
    </PageContext.Provider>
  )
}

export default App
