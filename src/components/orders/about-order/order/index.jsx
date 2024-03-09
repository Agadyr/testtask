'use client'

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Order({item, index}){
    console.log(item);
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
                {item.status} <span>&bull;</span>
            </div>
            <FontAwesomeIcon icon={faEllipsisVertical} className="dots fff"/>
        </div>
    )
}