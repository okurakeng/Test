import React, { useEffect, useState } from "react";
import axios from "axios";
import Launch from "./Launch";
import localforage from "localforage";
import { chevronBackCircle } from "ionicons/icons";
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
  IonToggle,
  RefresherEventDetail,
} from "@ionic/react";

export default function Parent(props: any) {
  const WAIT_MINUTES = 30;
  let { url, dataName, dataDate } = props;

  const [data, setData] = useState([]);
  const [lastUpdate, setDate] = useState("");
  const [devMode, setDevMode] = useState(false);
  const [offset, setOffset] = useState(0);
  const [useDevApi, setUseDevApi] = useState(false);

  function fetchData(useDevApi: boolean) {
    localforage
      .getItem(dataDate)
      .then(function (date: any) {
        if (date == null) {
          console.log("No date, likely means no data");
          getAllLaunches(url, useDevApi);
          setDate(date);
        } else {
          //console.log(date)
          localforage
            .getItem(dataName)
            .then(function (data: any) {
              // This code runs once the value has been loaded
              // from the offline store.
              if (data == null) {
                console.log("No data, likely means no data (duh)");
                getAllLaunches(url, useDevApi);
                setDate(date);
              } else {
                // console.log(date,new Date(),Math.abs(date - new Date()))
                if (
                  Math.abs(date.getTime() - new Date().getTime()) >
                  WAIT_MINUTES * 60 * 1000
                ) {
                  console.log("Too long, we need to update data.");
                  getAllLaunches(url, useDevApi);
                  setDate(date);
                } else {
                  console.log("Got saved data");
                  setData(data);
                  setDate(date);
                }
              }
            })
            .catch(function (err: any) {
              // This code runs if there were any errors with getting stored data
              console.log(err);
            });
        }
      })
      .catch(function (err: any) {
        // This code runs if there were any errors with getting stored date
        console.log(err);
      });
  }

  useEffect(() => {
    console.log("Rendering...");
    if (typeof localforage != "undefined") {
      console.log("Working"); // pass test
      // useDevApi
      localforage.getItem("devMode").then((devMode: any) => {
        if (devMode) {
          setDevMode(devMode);
          if (devMode) {
            localforage.getItem("useDevApi").then((useDevApi: any) => {
              if (useDevApi) {
                setUseDevApi(useDevApi)
                localforage.getItem("offset").then((offset: any) => {
                  if (offset) {
                    setOffset(offset);
                    getAllLaunches(url + "&offset=" + offset, useDevApi);
                    // setDate(new Date());
                  } else {
                    fetchData(useDevApi);
                  }
                });
              } else {
                localforage.getItem("offset").then((offset: any) => {
                  if (offset) {
                    setOffset(offset);
                    url = url + "&offset=" + offset
                    fetchData(useDevApi);
                    // setDate(new Date());
                  } else {
                    fetchData(useDevApi);
                  }
                });
              }
            });
          }
        } else {
          fetchData(false);
        }
      });

     
    } else {
      // error with local forage
      console.log("Localforage error");
    }
  }, [url]);

  const getAllLaunches = (url: string, useDevApi: boolean) => {
    console.log("hey....api contacted");

    axios
      .get("https://ll.thespacedevs.com/2.2.0/api-throttle/")
      .then((response) => {
        if (response.data.current_use > 10 || useDevApi) {

          
        
          localforage
            .getItem(dataName)
            .then(function (data: any) {
              // This code runs once the value has been loaded
              // from the offline store.
              if (data == null) {
                axios
                  .get(
                    url.substring(0, url.indexOf(".")) +
                      "dev" +
                      url.substring(url.indexOf("."))
                  )
                  .then((response) => {
                    console.log(response.data);
                    setData(response.data.results);

                    if (useDevApi) {
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
                      .setItem(dataDate, new Date())
                      .then(function (value: any) {
                        setDate(value);
                        // Do other things once the value has been saved.
                        console.log(value);
                      })
                      .catch(function (err: any) {
                        // This code runs if there were any errors
                        console.log(err);
                      });
                    }

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
                            console.log("Error");
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
              } else {
                setData(data);
              }
            })
            .catch(function (err: any) {
              // This code runs if there were any errors with getting stored data
              console.log(err);
            });
        } else {
          // console.log("test")
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
                .setItem(dataDate, new Date())
                .then(function (value: any) {
                  setDate(value);
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
                      console.log("Error");
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
        }
      })
      .catch((error) => {
        console.log("Error of type", error.message, "occurred");
      });
  };

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      location.reload();
    }, 1);
  }

  return (
    <>
      <IonRefresher
        slot="fixed"
        pullFactor={0.5}
        pullMin={100}
        pullMax={200}
        onIonRefresh={handleRefresh}
      >
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <Launch
        launches={data}
        date={lastUpdate}
        dataName={dataName}
        devMode={devMode}
        useDevApi={useDevApi}
        offset={offset}
      />
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={chevronBackCircle}></IonIcon>
        </IonFabButton>
        <IonFabList side="start">
          <div className="custom-container">
            <IonToggle
              id="myToggle"
              className="custom-toggle"
              checked={devMode}
              onIonChange={(event: CustomEvent) => {
                const isChecked = event.detail.checked;
                setDevMode(isChecked);

                localforage
                  .setItem("devMode", isChecked)
                  .then(function (value: any) {
                    // Do other things once the value has been saved.
                    console.log(value);
                  })
                  .catch(function (err: any) {
                    // This code runs if there were any errors
                    console.log(err);
                  });
              }}
            >
              Developer Mode
            </IonToggle>
          </div>
        </IonFabList>
      </IonFab>
    </>
  );
}
