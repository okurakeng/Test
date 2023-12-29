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
import CustomImage from "../CustomImage";
export default function Agency(props: any) {
  const { url } = props;

  const [data, setData] = useState(Object);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // let url = "";

    getAgency(url);
  }, []);

  const getAgency = (url: string) => {
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

  function displayAgency() {
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
            More Info on {data.name}
          </IonButton>
          <IonModal isOpen={isOpen}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>{data.name}</IonTitle>
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
              <IonItem>
                <IonLabel>
                  <CustomImage className={""} image_url={data.logo_url} />
                  {/* <img alt="Img missing " src={data.logo_url} /> */}
                  <h2>Agency Info:</h2>

                  <p className="ion-text-wrap">
                    <b>Agency Name:</b>{" "}
                    <span>
                      {data.name} ({data.abbrev})
                    </span>
                  </p>

                  <p className="ion-text-wrap">
                    <b>Founded:</b> <span>{data.founding_year}</span>
                  </p>

                  <p className="ion-text-wrap">
                    <b>Leadership:</b> <span>{data.administrator}</span>
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
