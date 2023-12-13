import React, { useEffect, useRef, useState } from "react";
// import "./Countdown.css";

export default function Countdown(props: any) {
  const [timeLeft, setTimeLeft] = useState("");
  const {launchDate} = props;

  useEffect(() => {
    const intervalId = setInterval(() => {
    
      setTimeLeft(timee(new Date(launchDate)));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  function timee(launchTime) {
    let diff = Math.abs( Date.now() - launchTime);
   

    let days = Math.trunc(diff / 86400000);
    diff = diff % 86400000; //hours
    let hours = Math.trunc(diff / 3600000);
    diff = diff % 3600000;
    let min = Math.trunc(diff / 60000);
    diff = diff % 60000;
    let sec = Math.trunc(diff / 1000);

    if (`${days}`.length == 1) {
      days = `0${days}`;
    }

    if (`${hours}`.length == 1) {
      hours = `0${hours}`;
    }

    if (`${min}`.length == 1) {
      min = `0${min}`;
    }

    if (`${sec}`.length == 1) {
      sec = `0${sec}`;
    }

    days += "";
    hours += "";
    min += "";
    sec += "";

    console.log(`${days}:${hours}:${min}:${sec}`);

    if ( Date.now() - launchTime < 0)
      return `T-${days}:${hours}:${min}:${sec}`;
    else 
      return `T+${days}:${hours}:${min}:${sec}`;
  }
  return <p style={{ fontSize: "3em" }}>{timeLeft}</p>;


};
