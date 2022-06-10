import { useContext, useState } from "react";
import { getMonthName } from "../../../../actions/date";
import { contextType, PageContext } from "../../../../pages/index/App";
import { Div } from "./styles";
import { getMonthFormat, filterListByMonth } from './../../../../actions/date';
import { ResumeItem } from "./components/ResumeItem";
import { getMoneyReport } from "../../../../actions/money";


export function InformationContainer() {
    let context: contextType = useContext(PageContext) as contextType
    let { currentMonth, setCurrentMonth, data, setFilteredList, filteredList } = context
    let [year, month] = currentMonth.split('-')
    const initialMoneyReport = getMoneyReport(filteredList)
    const [income, setIncome] = useState(initialMoneyReport.income)
    const [expense, setExpense] = useState(initialMoneyReport.expense)

    const updateFilteredListData = (newMonth: string) => { setFilteredList(filterListByMonth(data, newMonth));  }

    const handlePreviousMonth = () => {
        const newMonth = getMonthFormat(parseInt(month) - 2, parseInt(year))
        setCurrentMonth(newMonth)
        updateFilteredListData(newMonth)
    }
    
    const handleNextMonth = () => {
        const newMonth = getMonthFormat(parseInt(month), parseInt(year))
        setCurrentMonth(newMonth)
        updateFilteredListData(newMonth)
    }

    return (
        <Div.container>
            <Div.monthContainer>
                <Div.monthArrow onClick={() => handlePreviousMonth()}>⬅️</Div.monthArrow>
                <Div.monthTitle>{getMonthName(currentMonth)}</Div.monthTitle>
                <Div.monthArrow onClick={() => handleNextMonth()}>➡️</Div.monthArrow>
            </Div.monthContainer>
            <Div.resumeContainer>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem title="Balanço" value={income - expense} />
            </Div.resumeContainer>
        </Div.container>
    )
}