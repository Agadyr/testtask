'use client'
import Header from "@/components/header";
import Nav from "@/components/nav/nav";
import Order from "@/components/orders/page";
import Sales from "@/components/sales/page";

export default function Home() {
  return (
      <div className="orders">
        <Nav/>
        <div className="main">
          <Header/>
          <div className="main-items">
            <Order/>
            <Sales/>
          </div>
        </div>
      </div>
  );
}
