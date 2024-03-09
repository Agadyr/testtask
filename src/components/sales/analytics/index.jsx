import AboutOrder from "@/components/orders/about-order/page";
import { data, finishOrders } from "@/config/config";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

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
                    <h4 className={valueSelect === 'Сегодня' ? 'selected' : ""} onClick={() => setValueSelect('Сегодня')}>Сегодня</h4>
                    <h4 className={valueSelect === 'Неделя' ? 'selected' : ""} onClick={() => setValueSelect('Неделя')}>Неделя</h4>
                    <h4 className={valueSelect === 'Месяц' ? 'selected' : ""} onClick={() => setValueSelect('Месяц')}>Месяц</h4>
                </div>
            </div>
            <div style={{padding:"20px"}}>
            <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" stroke="#586A84"/>
                        <YAxis tickCount={8} stroke="#586A84"/>
                        <Tooltip />
                        <Line type="monotone" dataKey="uv" stroke="#9E13F3" fill="#9E13F3" strokeOpacity={0.7}/>
                    </LineChart>
                </ResponsiveContainer>
                <AboutOrder deleteItem={deleteItem} databack={databack}/>
            </div>
        </div>
    );
}
