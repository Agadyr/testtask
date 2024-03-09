'use client'

import { faSquarePlus } from "@fortawesome/free-regular-svg-icons"
import { faEllipsisVertical, faL, faPrint, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"

export default function Order({item, index, deleteItem}){
    const [settings, setSettings] = useState(false)
    const settingsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                setSettings(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [settingsRef]);
    return (
        <div className="row tp flex" key={index}>
            <div className="col col_user">
                <img src={item.contragent_img} alt="" />
                <div style={{marginLeft:"10px"}}>
                    <h2>{item.contragent_full_name}</h2>
                    <p>{item.time}</p>
                </div>
            </div>
            <div className="col">
                №{item.number}
            </div>
            <div className="col">
                {item.sum} ₸
            </div>
            <div className="col">
                {(item.status == 'Новый' || item.status == 'Старый') && <span>&bull; <p>{item.status}</p></span>}
                {(item.status == 'Успешно') && <span style={{color:"#2BEFB3"}}>&bull; <p>{item.status}</p></span>}
                {(item.status == 'Отменен' || item.status == 'Старый') && <span style={{color:"#FF316A"}}>&bull; <p>{item.status}</p></span>}
            </div>
            <div className="settings"  ref={settingsRef}>
                <FontAwesomeIcon icon={faEllipsisVertical} className="dots fff" onClick={() => setSettings(!settings)}/>
                {settings && <div className="setting">
                    <div className="df aic setting-item">
                        <FontAwesomeIcon icon={faSquarePlus} className="icon-blue"/>
                        <h3>Создать Задачу</h3>
                    </div>
                    <div className="df aic setting-item">
                        <FontAwesomeIcon icon={faPrint} className="icon-blue"/>
                        <h3>Распечатать</h3>
                    </div>
                    <div className="df aic setting-item">
                        <FontAwesomeIcon icon={faTrashAlt} className="icon-red"/>
                        <h3 onClick={() => {deleteItem(item),setSettings(false)}}>Удалить Заказ</h3>
                    </div>
                </div>}
            </div>
        </div>
    )
}