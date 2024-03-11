'use client'
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';

export default function Graphic({dataDay,data,dataMonth,valueSelect}){
    return (
        <div>
            {valueSelect == 'Неделя' && <div style={{padding:"20px"}}>
            <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 20,
                        }}
                    >
                        <XAxis dataKey="name" stroke="#586A84"/>
                        <YAxis tickCount={8} stroke="#586A84"/>
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#9E13F3" strokeWidth={3} fillOpacity="0.2" fill="#9E13F3">

                        </Area>
                    </AreaChart>
                </ResponsiveContainer>
            </div>}
            {valueSelect == 'Месяц' && <div style={{padding:"20px"}}>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={dataMonth}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <XAxis
                        dataKey="name"
                        stroke="#586A84"
                        interval={0}
                        tick={{ angle: -25, textAnchor: 'end' }}
                    />

                    <YAxis tickCount={8} stroke="#586A84" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#9E13F3" strokeWidth={3} fillOpacity="0.2" fill="#9E13F3" />
                </AreaChart>
            </ResponsiveContainer>;
            </div>}
            {valueSelect == 'Сегодня' && <div style={{padding:"20px"}}>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={dataDay}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <XAxis
                        dataKey="name"
                        stroke="#586A84"
                        interval={0}
                    />

                    <YAxis tickCount={8} stroke="#586A84" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#9E13F3" strokeWidth={3} fillOpacity="0.2" fill="#9E13F3" />
                </AreaChart>
            </ResponsiveContainer>;
            </div>}
        </div>
    )
}