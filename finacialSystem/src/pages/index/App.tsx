import { useEffect, useState } from 'react'
import { filterListByMonth, getCurrentMonth } from '../../actions/date'
import { TableComponent } from '../../components/pages/index/Table'
import { items } from '../../data/items'
import { itemType } from '../../data/types'
import { Div, H1 } from './App.styles'

function App() {
  const [data, setData] = useState(items)
  const [filteredList, setFilteredList] = useState<itemType[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())


  useEffect(() => {
    setData(filterListByMonth(data, currentMonth))
  }, [data, currentMonth])
  

  return (
    <Div.container>
      <Div.header>
        <H1.title>Sistema financeiro</H1.title>
      </Div.header>

      
      <Div.main>
      <TableComponent data={data} />
      </Div.main>
    </Div.container>
  )
}

export default App
