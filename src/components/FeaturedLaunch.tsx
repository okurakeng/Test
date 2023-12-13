import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Launch.css";
import LaunchInfo from "./LaunchInfo";
import CoreInfo from "./CoreInfo";
import StatusInfo from "./StatusInfo";
import LocationInfo from "./LocationInfo";
import MissionInfo from "./MissonInfo";
import { useState } from "react";
import Countdown from "./Countdown";
import Email from "./Email";

export default function FeaturedLaunches(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState(0);
  const { launch } = props;
  console.log(launch.window_start)

  return (
    <IonGrid className="rows">
      <IonRow class="ion-align-items-center">
        <IonCol size="auto">
          <IonItem className="rows">
            <IonCard
              onClick={() => {
                setID(launch.id);
                setIsOpen(true);
              }}
            >
              <img
                className="specialImage"
                alt="Img missing "
                src={launch.image}
              />
              <IonCardHeader>
                <IonCardTitle>
                  {launch.mission
                    ? launch.mission.name
                    : launch.name.substring(launch.name.indexOf("|") + 1)}
                </IonCardTitle>
              </IonCardHeader>
              <LaunchInfo launch={launch}></LaunchInfo>
              <IonItem>Click this tab for more info!</IonItem>
            </IonCard>
            <IonModal isOpen={isOpen && launch.id == id}>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Launch</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => setIsOpen(false)}>
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
                  <MissionInfo launch={launch}></MissionInfo>
                  <LocationInfo launch={launch}></LocationInfo>
                  <Email launch={launch}></Email>
                </IonCard>
              </IonContent>
            </IonModal>
          </IonItem>
        </IonCol>
        <IonCol>
          <Countdown launchDate={launch.window_start}></Countdown>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
