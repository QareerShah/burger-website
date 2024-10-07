"use client"
import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import Features from "./Features/Features";
import Popular from "./popular/popular";
import Delivery from "./delivery/delivery";
import Team from "./team/team";
import Reservation from "./Reservation/Reservation";
import Newsbar from "./newsbar/newsbar";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  useEffect(()=>{

    const initAOS = async ()=>{
    await import('aos');
    AOS.init({
       duration:1000,
       easing: "ease",
       once: true,
      anchorPlacement: "top-center",
    });
    };

    initAOS();

  },[])

  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Popular />
      <Delivery />
      <Team />
      <Reservation />
      <Newsbar />
    </div>
  );
}
