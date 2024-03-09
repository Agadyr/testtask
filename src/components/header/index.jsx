'use client'

import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
export default function Header(){
    const [input, setInput] = useState("")
    return (
        <header>
            <div className="search-header">
                {input.length <= 0 && <FontAwesomeIcon icon={faMagnifyingGlass}/>}
                <input type="text" placeholder="Поиск" value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <div className="header-right">
                <img src="icons/not.svg" alt="" />
                <div className="change-bg">
                    <img src="icons/sun.svg" alt=""/>
                    <img src="icons/moon.svg" alt="" className="moon"/>
                </div>
                <FontAwesomeIcon icon={faUser} className="user"/>
            </div>
        </header>
    )
}