import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import CustomImage from "../CustomImage";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
export default function Rocket(props: any) {
  const { url } = props;

  const [data, setData] = useState(Object);
  const [isOpen, setIsOpen] = useState(false);
  const { dateGenUTC, dateGen } = repeatedFunctions();
  const modal = useRef<HTMLIonModalElement>(null);


  useEffect(() => {
    getRocket(url);
  }, []);

  const getRocket = (url: string) => {
    console.log("hey....api contacted");

    axios
      .get("https://lldev" + url.substring(url.indexOf(".thespacedevs")))
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error of type", error.message, "occurred");
      });
  };

  function displayRocket() {
    // const { data } = props;
    // console.log(data)
    if (data) {
      return (
        <>
          <IonButton
            className="ion-text-wrap"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            More Info on {data.full_name}
          </IonButton>
          <IonModal isOpen={isOpen} ref={modal} initialBreakpoint={1} breakpoints={[0, 1]} onDidDismiss={() => setIsOpen(false)}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>{data.full_name}</IonTitle>
                <IonButtons slot="end">
                  <IonButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Close
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonCard>
                <CustomImage className={""} image_url={data.image_url} />
                <IonCardHeader>
                  <IonCardTitle>{data.full_name}</IonCardTitle>
                </IonCardHeader>
                <IonItem>
                  <IonLabel>
                    {/* <img alt="Img missing " src={data.image_url} /> */}
                    <h2>Rocket Info:</h2>

                    <p className="ion-text-wrap">
                      <b>Rocket Name:</b>{" "}
                      <span>
                        {data.full_name} (Reuseable?{" "}
                        {data.reusable ? "Yes" : "No"}; Active?{" "}
                        {data.active ? "Yes" : "No"})
                      </span>
                    </p>

                    {/* <p className="ion-text-wrap">
                  <b>Manufacturer:</b> <span>{data.manufacturer.name}</span>
                </p> */}

                    <p className="ion-text-wrap">
                      <b>Family:</b> <span>{data.family}</span>
                    </p>

                    <p className="ion-text-wrap">
                      <b>First Flight:</b>{" "}
                      <span>{dateGenUTC(data.maiden_flight, 5, false)}</span>
                    </p>

                    <p className="ion-text-wrap">
                      <b>Description:</b> <span>{data.description}</span>
                    </p>
                  </IonLabel>
                </IonItem>
              </IonCard>
            </IonContent>
          </IonModal>
        </>
      );
    } else {
      return <>Test</>;
    }
  }

  return <>{displayRocket()}</>;
}
