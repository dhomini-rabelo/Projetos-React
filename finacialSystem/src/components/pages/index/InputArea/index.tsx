import { ElementRef, useContext, useRef } from "react";
import { categories } from "../../../../data/categories";
import { contextType, PageContext } from "../../../../pages/index/App";
import { Div } from "./styles";
import { fdm, filterListByMonth } from './../../../../actions/date';


export function InputArea() {
    let context: contextType = useContext(PageContext) as contextType
    let { currentMonth, data, setData, setFilteredList } = context

    let dateRef = useRef<HTMLInputElement | null>(null) 
    let categoryRef = useRef<HTMLSelectElement | null>(null)
    let titleRef = useRef<HTMLInputElement | null>(null)
    let valueRef = useRef<HTMLInputElement | null>(null)

    function handleNewItem() {
        let now = new Date()
        let newItem = {
            date: new Date(dateRef.current!.value || `${now.getFullYear()}-${fdm(now.getMonth()+1)}-${fdm(now.getDate())}`),
            category: categoryRef.current!.value,
            title: titleRef.current!.value || 'Nulo',
            value: parseFloat(parseFloat(valueRef.current!.value || '0.00').toFixed(2)),
        }
        let newData = [...data, newItem]
        setData(newData)
        setFilteredList(filterListByMonth(newData, currentMonth))
    }


    return (
        <Div.container>
            <Div.item><label htmlFor="date">Data</label><input ref={dateRef} type="date" id="date" style={{height: '1.7rem'}} /></Div.item>
            <Div.item>
                <label htmlFor="category">Categoria</label>
                <select name="category" id="category" ref={categoryRef}>
                    {Object.keys(categories).map((category, index) => <option key={index} value={category} style={{fontSize: '1.2rem'}}>{categories[category].title}</option>)}                    
                </select>
            </Div.item>
            <Div.item><label htmlFor="title">Título</label><input ref={titleRef} type="text" id="title" placeholder="Digite um título" /></Div.item>
            <Div.item><label htmlFor="value">Valor</label><input ref={valueRef} type="number" id="value" placeholder="Digite um valor" /></Div.item>
            <Div.item><button onClick={() => handleNewItem()}>Adicionar</button></Div.item>
        </Div.container>
    )
}