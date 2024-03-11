'use client'

import { faBars, faBurger, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Header({setInput, input}){
    return (
        <div>
            <header className="header">
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
            <header className="header-none">
                <FontAwesomeIcon icon={faBars} className="burger"/>
                <img src="icons/logow.svg" alt="" className="logow"/>
                <img src="icons/not.svg" alt="" />
                <div className="header-right">
                    <FontAwesomeIcon icon={faUser} className="user"/>
                </div>
            </header>
        </div>
        
    )
}