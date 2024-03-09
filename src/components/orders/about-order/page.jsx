'use client'
import { faEllipsisVertical, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Order from "./order";
import { useState } from "react";

const getSorted = (data, key, order) => {
  return [...data].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (order === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
};

export default function AboutOrder({databack,deleteItem}) {
  const [sortKey, setSortKey] = useState("status");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortBy = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = getSorted(databack, sortKey, sortOrder);

  return (
    <div className="table">
      <div className="row row-header df">
        <div className={`col ${sortOrder}`} onClick={() => sortBy("contragent_full_name")}>
          Контрагент{" "}
          {sortKey === "contragent_full_name" && (
            <img src="/icons/up.svg" alt="" />
          )}
        </div>
        <div className={`col ${sortOrder}`} onClick={() => sortBy("number")}>
          Заказ №{" "}
          {sortKey === "number" && <img src="/icons/up.svg" alt="" />}
        </div>
        <div className={`col ${sortOrder}`} onClick={() => sortBy("sum")}>
          Сумма {sortKey === "sum" && <img src="/icons/up.svg" alt="" />}
        </div>
        <div className={`col ${sortOrder}`} onClick={() => sortBy("status")}>
          Статус{" "}
          {sortKey === "status" && <img src="/icons/up.svg" alt="" />}
        </div>
        <FontAwesomeIcon icon={faEllipsisVertical} className="dots" />
      </div>
      {sortedData.map((item, index) => (
        <Order item={item} key={index} deleteItem={deleteItem}/>
      ))}
    </div>
  );
}
