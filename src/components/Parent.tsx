import React, { useEffect, useState } from "react";
import axios from "axios";
import Launch from "./Launch";
import localforage from "localforage";

export default function Parent(props: any) {
  const WAIT_MINUTES = 30;
  const {url,dataName,dateName} = props;

  const [data, setData] = useState([]);
  const [lastUpdate, setDate] = useState("");

  useEffect(() => {
    if (typeof localforage != "undefined") {
      console.log("Working"); // pass test

      localforage
        .getItem(dateName)
        .then(function (date : any) {
          
          if (date == null) {
            console.log("No date")
            getAllLaunches(
                url
            );
          } else {
            //console.log(date)
            localforage
            .getItem(dataName)
            .then(function (data: any) {
              // This code runs once the value has been loaded
              // from the offline store.
              if (data == null) {
                console.log("No data")
                getAllLaunches(
                    url
                );
              } else {
               // console.log(date,new Date(),Math.abs(date - new Date()))
                if (Math.abs(date.getTime() - new Date().getTime()) > WAIT_MINUTES * 60 * 1000) {
                  console.log("too long")
                  getAllLaunches(
                    url
                  );
                } else {
                  console.log("got saved data")
                  setData(data);
                  setDate(date)
                }
                
              }
            })
            .catch(function (err: any) {
              // This code runs if there were any errors
              console.log(err);
            });       
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
    console.log("hey....api contacted")

   axios.get("https://ll.thespacedevs.com/2.2.0/api-throttle/").then( (response) => {
      if (response.data.current_use > 10) {
        setData(data);
      }
  
    }).catch((error) => {
      console.log("Error of type", error.message, "occurred");
    } )
    
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);

        localforage
          .setItem(dataName, response.data.results)
          .then(function (value: any) {
            // Do other things once the value has been saved.
            console.log(value);
          })
          .catch(function (err: any) {
            // This code runs if there were any errors
            console.log(err);
          });

        localforage
          .setItem(dateName, new Date())
          .then(function (value: any) {
            setDate(value)
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
        
        if (error.message == "Network Error") {
          localforage
          .getItem(dataName)
          .then(function (data: any) {
            // This code runs once the value has been loaded
            // from the offline store.
            if (data == null) {
              console.log("Error")
            } else {       
                setData(data);
            }
          })
          .catch(function (err: any) {
            // This code runs if there were any errors
            console.log(err);
          });      
        }
      });
  };

  return <Launch launches={data} date={lastUpdate} />;
};
