import React, { useEffect, useState } from "react";
import axios from "axios";
import Launch from "./Launch";
import localforage from "localforage";

const PastParent: React.FC = () => {
  const [data, setData] = useState([]);
  // const [lastUpdate, setDate] = useState("");
  useEffect(() => {
    if (typeof localforage != "undefined") {
      console.log("Working"); // pass test

      localforage
        .getItem("dataPast")
        .then(function (data: any) {
          // This code runs once the value has been loaded
          // from the offline store.
          if (data == null) {
            getAllLaunches(
              "https://lldev.thespacedevs.com/2.2.0/launch/previous/?format=json&limit=100"
            );
          } else {
            setData(data);
          }
        })
        .catch(function (err: any) {
          // This code runs if there were any errors
          console.log(err);
        });
    } else {
      // error with local forage
    }
  }, []);

  const getAllLaunches = (url: string) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);

        localforage
          .setItem("dataPast", response.data.results)
          .then(function (value: any) {
            // Do other things once the value has been saved.
            console.log(value);
          })
          .catch(function (err: any) {
            // This code runs if there were any errors
            console.log(err);
          });
      })
      .catch((error) => {
        console.log("Error of type", error.message, "occurred");
        alert(`Error! An ${error.message} occurred.`);
      });
  };

  return <Launch launches={data}  />;
};

export default PastParent;
