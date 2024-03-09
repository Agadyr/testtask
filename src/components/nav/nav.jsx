'use client'

import { icons } from "@/config/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import IconsOfNav from "./icons";
export default function Nav(){

    const [isHovered, setIsHovered] = useState(null);

    return (
        <nav>
            <img src="icons/logo_white.svg" alt="" className="logo"/>
            <div className="icons">
            {icons.map((item, index) => (
                <IconsOfNav
                    index={index}
                    item={item}
                    setIsHovered={setIsHovered}
                    isHovered={isHovered}
                />
            ))}

            </div>
            <div className="btn-bordered">
                <FontAwesomeIcon icon={faUser}/>
                <h3>Покупатель</h3>
            </div>

        </nav>
    )
}