import { IonItem } from "@ionic/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Orbits from "./Orbits";

const Parent: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllOrbits();
  }, []);
  const url =
    "https://lldev.thespacedevs.com/2.2.0/config/orbit/?format=json&limit=30";
  const getAllOrbits = () => {
    axios
      .get(url)
      .then((response) => {
        //  console.log(response.data.results);
        setData(response.data.results);
      })
      .catch((error) => console.log("Error"));
  };

  return (
    <Orbits orbits={data}/>
  );
}; //test

export default Parent;

//https://lldev.thespacedevs.com/2.2.0/config/orbit/?format=json&limit=30
