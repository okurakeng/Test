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
import "../Launch.css";
import LaunchInfo from "./LaunchInfo";
import CoreInfo from "./CoreInfo";
import StatusInfo from "./StatusInfo";
import LocationInfo from "./LocationInfo";
import MissionInfo from "./MissonInfo";
import { useState } from "react";
import Countdown from "./Countdown";
import Email from "./Email";
import LaunchModal from "./LaunchModal";

export default function FeaturedLaunches(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState(0);
  const { launch } = props;

  const openModal = () => {
    setID(launch.id);
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("test");
    setIsOpen(false);
  };

  return (
    <IonGrid className="rows">
      <IonRow class="ion-align-items-center">
        <IonCol size="auto">
          <IonItem className="rows">
            <IonCard
              onClick={() => {
                openModal();
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
              <LaunchModal
                launch={launch}
                closeModal={closeModal}
              ></LaunchModal>
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
