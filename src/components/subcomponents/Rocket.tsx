import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
export default function Rocket(props: any) {
  const { url, showButton } = props;

  const [data, setData] = useState(Object);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (showButton)
      getAgency(url);
  }, []);

  const getAgency = (url: string) => {
    console.log("hey....api contacted");

    axios
      .get("https://lldev"+url.substring(url.indexOf(".thespacedevs")))
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error of type", error.message, "occurred");
      });
  };

  function displayAgency() {
    if (!showButton)
      return <></>
    // const { data } = props;
    // console.log(data)
    if (data) {
      return (
        <>
        <IonButton onClick={() => {
                    setIsOpen(true)
                  }}>More Info on Rocket</IonButton>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Agency</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel>
                <img alt="Img missing " src={data.image_url} />
                <h2>Rocket Info:</h2>

                <p className="ion-text-wrap">
                  <b>Rocket Name:</b>{" "}
                  <span>
                    {data.name} (Reuseable? {data.reusable ? "Yes" : "No"}; Active? {data.active ? "Yes" : "No"})
                  </span>
                </p>

                {/* <p className="ion-text-wrap">
                  <b>Manufacturer:</b> <span>{data.manufacturer.name}</span>
                </p> */}

                <p className="ion-text-wrap">
                  <b>Family:</b> <span>{data.family}</span>
                </p>

                <p className="ion-text-wrap">
                  <b>First Flight:</b> <span>{data.maiden_flight}</span>
                </p>

                <p className="ion-text-wrap">
                  <b>Description:</b> <span>{data.description}</span>
                </p>
              </IonLabel>
            </IonItem>
          </IonContent>
        </IonModal>
        </>
      );
    } else {
      return <>Test</>;
    }
  }

  return <>{displayAgency()}</>;
}
