import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Order from "./order";
import { useEffect, useState } from "react";

export default function AboutOrder({ orders }) {

    let [databack, setData] = useState([
        {
          "contragent_img": "/user.png",
          "contragent_full_name": "Виктория Свидролова",
          "time": "4 минуты назад",
          "number": "0000001",
          "sum": 100001,
          "status": "Старый"
        },
        {
          "contragent_img": "/user.png",
          "contragent_full_name": "Виктория Свидролова",
          "time": "4 минуты назад",
          "number": "0000001",
          "sum": 100002,
          "status": "Новый"
        },
        {
          "contragent_img": "/user.png",
          "contragent_full_name": "Виктория Свидролова",
          "time": "4 минуты назад",
          "number": "0000001",
          "sum": 100003,
          "status": "Новый"
        },
        {
          "contragent_img": "/user.png",
          "contragent_full_name": "Виктория Свидролова",
          "time": "4 минуты назад",
          "number": "0000001",
          "sum": 100004,
          "status": "Новый"
        }
      ]);
    const [sortKeys, setSortKeys] = useState({
        contragent_full_name: "asc",
        number: "asc",
        sum: "asc",
        status: "asc"
    });
    const[sortKey, setSortKey] =  useState("status")

    databack = databack.sort((a, b) => {
            let aPart, bPart;
            if (sortKey == "status") {
                aPart = a.status;
                bPart = b.status;
            } else if (sortKey == "contragent_full_name") {
                aPart = a.contragent_full_name;
                bPart = b.contragent_full_name;
            } else if (sortKey == "sum") {
                aPart = a.sum;
                bPart = b.sum;
            } else if (sortKey == "number") {
                aPart = a.number;
                bPart = b.number;
            }
            if (sortKeys[sortKey] == "asc") {
                if (aPart < bPart) {
                    return -1;
                }
                if (aPart > bPart) {
                    return 1;
                }
            } else {
                if (aPart > bPart) {
                    return -1;
                }
                if (aPart < bPart) {
                    return 1;
                }
            }
            
            return 0;
        });

  const sortBy = (key) => {
    setSortKey(key)
    setSortKeys((prevKeys) => ({
      ...prevKeys,
      [key]: prevKeys[key] == "asc" ? "desc" : "asc"
    }));
};

  const showOrders = databack.map((item, index) => (
    <Order item={item} key={index} />
  ));

  return (
    <div className="table">
      <div className="row row-header df">
        <div
          className={`col ${sortKeys["contragent_full_name"]}`}
          onClick={() => sortBy("contragent_full_name")}>
          Контрагент{" "}
         <img src="/icons/up.svg" alt="" />
        </div>
        <div
          className={`col ${sortKeys["number"]}`}
          onClick={() => sortBy("number")}>
          Заказ №
          <img src="/icons/up.svg" alt="" />
        </div>
        <div
          className={`col ${sortKeys["sum"]}`}
          onClick={() => sortBy("sum")}>
          Сумма
          <img src="/icons/up.svg" alt="" />
        </div>
        <div
          className={`col ${sortKeys["status"]}`}
          onClick={() => sortBy("status")}
        >
          Статус
          <img src="/icons/up.svg" alt="" />
        </div>
        <FontAwesomeIcon icon={faEllipsisVertical} className="dots" />
      </div>
      {showOrders}
    </div>
  );
}
