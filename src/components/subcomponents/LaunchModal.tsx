import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LaunchInfo from "./modalcomponents/LaunchInfo";
import LocationInfo from "./modalcomponents/LocationInfo";
import MissionInfo from "./modalcomponents/MissonInfo";
import CoreInfo from "./modalcomponents/CoreInfo";
import StatusInfo from "./modalcomponents/StatusInfo";
import Email from "./modalcomponents/Email";
import PogoInfo from "./modalcomponents/PogoInfo";
import AdditionalInfo from "./modalcomponents/AdditionalInfo";
import { useState } from "react";
export default function Parent(props: any) {
  const { launch, closeModal, devMode } = props;
  const [text,setText] = useState('')

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {launch.mission
              ? launch.mission.name
              : launch.name.substring(launch.name.indexOf("|") + 1)}
          </IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() => {
                closeModal();
              }}
            >
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <CoreInfo launch={launch}></CoreInfo>
          <LaunchInfo launch={launch}></LaunchInfo>
          <StatusInfo launch={launch}></StatusInfo>
          <PogoInfo launch={launch}></PogoInfo>
          <MissionInfo launch={launch}></MissionInfo>
          <LocationInfo launch={launch}></LocationInfo>
          <AdditionalInfo launch={launch}></AdditionalInfo>
          <Email launch={launch}></Email>
          {devMode ? <IonItem>
            <IonLabel>
              <IonButton onClick={() => {console.log(launch)
              console.log(JSON.stringify(launch, null, 2))
              setText(JSON.stringify(launch, null, 2));
              }}>
                Display Launch in Console
              </IonButton>
              <pre >{text}</pre>
              <p>Data as of {launch.last_updated}</p>
            </IonLabel>
          </IonItem> : <></>}
        </IonCard>
      </IonContent>
    </>
  );
}
