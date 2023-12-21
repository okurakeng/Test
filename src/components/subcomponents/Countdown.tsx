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

  function timee(launchTime : any) {
    let diff = Math.abs( Date.now() - launchTime);
   

    let days = Math.trunc(diff / 86400000);
    diff = diff % 86400000; //hours
    let hours = Math.trunc(diff / 3600000);
    diff = diff % 3600000;
    let min = Math.trunc(diff / 60000);
    diff = diff % 60000;
    let sec = Math.trunc(diff / 1000);

    let daysStr = `${days}`.padStart(2,'0');
    let hoursStr = `${hours}`.padStart(2,'0');
    let minStr = `${min}`.padStart(2,'0');
    let secStr =`${sec}`.padStart(2,'0');

    if ( Date.now() - launchTime < 0)
      return `T-${daysStr}:${hoursStr}:${minStr}:${secStr}`;
    else
      return `T+${daysStr}:${hoursStr}:${minStr}:${secStr}`;
  }

  return <p style={{ fontSize: "3em" }}>{timeLeft}</p>;


};
