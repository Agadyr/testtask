'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function IconsOfNav({item,index,setIsHovered,isHovered}){
    return (
        <div key={index}
        className={(isHovered == index || item.title == 'Заказы') ? "icon-item hovered" : "icon-item"}
        onMouseEnter={() => setIsHovered(index)}
        onMouseLeave={() => setIsHovered(null)}>

            <FontAwesomeIcon icon={item.name}  className={(isHovered == index || item.title == 'Заказы') ? "icon hovered" : "icon"}/>
            <h3 className={(isHovered == index || item.title == 'Заказы') ? "hovered" : ""}>{item.title}</h3>
        </div>
    )
}