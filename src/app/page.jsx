'use client'
import Header from "@/components/header";
import Nav from "@/components/nav/nav";
import Order from "@/components/orders/page";
import Sales from "@/components/sales/page";
import { data, orders } from "@/config/config";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("")
  const [databack, setData] = useState(orders);
  const [databackFilter, setDataFilter] = useState([]);

  useEffect(() => {
    if(input === ""){
      setDataFilter(databack)
    }else{
      setDataFilter([...databack.filter(item => item.contragent_full_name.toLowerCase().includes(input))])
    }  
  }, [input])
  return (
      <div className="orders">
        <Nav/>
        <div className="main">
          <Header setInput={setInput} input={input}/>
          <div className="main-items">
            {databack && <Order databack={databackFilter} setInput={setInput} input={input} setDataFilter={setDataFilter}/>}
            <Sales/>
          </div>
        </div>
      </div>
  );
}
