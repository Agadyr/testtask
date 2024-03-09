'use client'

import Analytics from "./analytics"

export default function Sales(){
    return (
        <div className="sales">
            <div className="order-header">
                <h1>Обзор продаж</h1>
                <div className="df jcsb aic g2">
                    <h4>Общая выручка</h4>
                    <h4 className="selected">Средний чек</h4>
                    <h4>Кол-во заказов</h4>
                </div>
            </div>
            <div className="table">
                <Analytics/>
            </div>
        </div>
    )
}