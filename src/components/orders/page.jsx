'use client'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutOrder from "./about-order/page";
import { orders } from "@/config/config";
import { useState } from "react";

export default function Order(){
    const totalSum = orders.reduce((acc, curr) => acc + curr.sum, 0);
    const [databack, setData] = useState(orders);
    const deleteItem = (item) => {
        let rm = [...databack]
        let index = databack.indexOf(item)
        rm.splice(index,1)
        setData(rm)
    }
    return (
        <div className="order">
            <div className="order-header">
                <div className="df jcsb aic g1">
                    <img src="icons/frame.svg"></img>
                    <h4>Заявки</h4>
                    <h4 className="selected">Заказы</h4>
                </div>
                <span>{orders.length} заказа, {totalSum} ₸</span>
                <img src="icons/filter_list.svg" alt="" className="filter"/>
                <div className="btn-bordered">
                    <FontAwesomeIcon icon={faPlus}/>
                    <h3>Создать заказ</h3>
                </div>
            </div>
            <AboutOrder databack={databack} deleteItem={deleteItem}/>
        </div>
    )
}