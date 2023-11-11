import React, { useEffect, useState } from "react";
import axios from "axios";
import Launch from "./Launch";

const PastParent: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllOrbits();
  }, []);
  const url =
    "https://lldev.thespacedevs.com/2.2.0/launch/previous/?format=json&limit=100";
  const getAllOrbits = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log("Error of type", error.message, "occurred");
        alert(`Error! An ${error.message} occurred.`);
      });
  };

  return <Launch launches={data} />;
};

export default PastParent;
