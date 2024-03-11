'use client'
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutOrder from "./about-order/page";
import { useState } from "react";
export default function Order({databack}){
    const [input, setInput] = useState("")
    console.log(databack);
    const totalSum = databack.reduce((acc, curr) => acc + curr.sum, 0);
    const deleteItem = (item) => {
        let rm = [...databack]
        let index = databack.indexOf(item)
        rm.splice(index,1)
        setData(rm)
    }
    return (
        <div className="order">
            <div className="order-header order-header-flex">
                <div className="df jcsb aic g1">
                    <img src="icons/frame.svg"></img>
                    <h4>Заявки</h4>
                    <h4 className="selected">Заказы</h4>
                </div>
                <span>{databack.length} заказа, {totalSum} ₸</span>
                <img src="icons/filter_list.svg" alt="" className="filter"/>
                <div className="btn-bordered" >
                    <FontAwesomeIcon icon={faPlus}/>
                    <h3>Создать заказ</h3>
                </div>
                <FontAwesomeIcon icon={faPlus} className="icon-none"/>
            </div>
            <div className="none order-header ">
                <img src="icons/filter_list.svg" alt="" className="filter"/>
                <div className="search-header">
                    {input.length <= 0 && <FontAwesomeIcon icon={faMagnifyingGlass}/>}
                    <input type="text" placeholder="Поиск" value={input} onChange={(e) => setInput(e.target.value)}/>
                </div>
                <div className="df jcsb aic g1 ">
                    <h4 className="selected">Активные</h4>
                    <h4>Завершенные</h4>
                </div>
            </div>
            <div className="order-header none mt2">
                <span>{databack.length} заказа, {totalSum} ₸</span>
                <FontAwesomeIcon icon={faPlus} className="icon-none"/>
            </div>
            <AboutOrder databack={databack} deleteItem={deleteItem}/>
        </div>
    )
}