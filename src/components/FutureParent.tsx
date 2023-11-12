import React, { useEffect, useState } from "react";
import axios from "axios";
import Launch from "./Launch";

const FutureParent: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllOrbits("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json&limit=100");
  }, []);
 
  const getAllOrbits = (url : string) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log("Error of type", error.message, "occurred");
        alert(`Error! An ${error.message} occurred.`);
      });
  };

  return <Launch launches={data} />;
};

export default FutureParent;
