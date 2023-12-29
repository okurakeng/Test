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
import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
import CustomImage from "../CustomImage";
import { useState } from "react";
import Agency from "./Agency";
import Agencies from "./Agencies";
export default function Program(props: any) {
  const { dateGenUTC, dateGen } = repeatedFunctions();
  const [isOpen, setIsOpen] = useState(false);
  const { launch } = props;

  // agency error handling
  const getAgency = (agencies: any) => {
    if (agencies.length == 0) {
      return (
        <>
          <b>Agency:</b> <span>Not Available</span>
        </>
      );
    } else {
      let list = "";
      // console.log(agencies)
      for (let agency of agencies) {
        //  console.log(agency.name)
        list += agency.name + "; ";
      }

      return (
        <>
          <b>Agencies:</b> <span>{list}</span>{" "}
        </>
      );
    }
  };

  function getAgencyUrls(agencies : any) {
    let ele: any[] = [];
    agencies.forEach((element : any)  => {
      ele.push(element.url)
    });

    return ele;


  }

  function getPrograms() {
    if (launch.program) {
      if (launch.program.length > 0) {
        return (
          <>
            <IonButton
              className="ion-text-wrap"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Info on Involved Programs
            </IonButton>
            <IonModal isOpen={isOpen}>
              <IonHeader>
                <IonToolbar>
                  <IonTitle className="ion-text-wrap">
                    Related Programs
                  </IonTitle>
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
                {launch.program.map((item: any, index: any) => {
                  return (
                    <IonCard key={index}>
                      <CustomImage image_url={item.image_url} />
                      <IonCardHeader>
                        <IonCardTitle>{item.name}</IonCardTitle>
                      </IonCardHeader>
                      <IonItem>
                        <IonLabel>
                          <h2>Program Info:</h2>

                          <p className="ion-text-wrap">
                            <b>Program Name:</b> <span>{item.name}</span>
                          </p>

                          <p className="ion-text-wrap">
                            <b>Start:</b> <span>{dateGenUTC(item.start_date,5,false)}</span>
                          </p>

                          <p className="ion-text-wrap">
                            <b>Description:</b> <span>{item.description}</span>
                          </p>

                          <p className="ion-text-wrap">
                            {getAgency(item.agencies ? item.agencies : [])}
                          </p>

                          <p className="ion-text-wrap">
                          <b>Patches:</b>
                          {(item.mission_patches.map((image:any, index:number) => {
                            return <CustomImage image_url={image.image_url} key={index}></CustomImage>

                          }))}
                          </p>

                          <p className="ion-text-wrap">
                            <b>Learn about the involved agencies:</b>
                          </p>
                          <Agencies listOfAgenciesUrls={getAgencyUrls(item.agencies)}></Agencies>
                       
                        </IonLabel>
                      </IonItem>
                    </IonCard>
                  );
                })}
              </IonContent>
            </IonModal>
          </>
        );
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  }

  return getPrograms();
}
