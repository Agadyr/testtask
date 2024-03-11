import AboutOrder from "@/components/orders/about-order/page";
import { data, dataDay, dataMonth, finishOrders } from "@/config/config";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Graphic from "./graphic";

export default function Analytics() {
    const [databack, setData] = useState(finishOrders);
    const deleteItem = (item) => {
        let rm = [...databack]
        let index = databack.indexOf(item)
        rm.splice(index,1)
        setData(rm)
    }
    const [valueSelect, setValueSelect] = useState("Неделя");

    return (
        <div>
            <div className="order-header period-header">
                <h1>Выбор Периода</h1>
                <div className="df jcsb aic g2">
                    <FontAwesomeIcon icon={faCalendarDays}/>
                    <span href="/" className={valueSelect === 'Сегодня' ? 'selected' : ""} onClick={() => setValueSelect('Сегодня')}>Сегодня</span>
                    <span href="/" className={valueSelect === 'Неделя' ? 'selected' : ""} onClick={() => setValueSelect('Неделя')}>Неделя</span>
                    <span href="/" className={valueSelect === 'Месяц' ? 'selected' : ""} onClick={() => setValueSelect('Месяц')}>Месяц</span>
                </div>
            </div>
            <Graphic dataDay={dataDay} dataMonth={dataMonth} data={data} valueSelect={valueSelect}/>
            <AboutOrder deleteItem={deleteItem} databack={databack}/>
        </div>
    );
}
