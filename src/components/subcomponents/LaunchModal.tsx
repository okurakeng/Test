import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import LaunchInfo from "./modalcomponents/LaunchInfo";
import LocationInfo from "./modalcomponents/LocationInfo";
import MissionInfo from "./modalcomponents/MissonInfo";
import CoreInfo from "./modalcomponents/CoreInfo";
import StatusInfo from "./modalcomponents/StatusInfo";
import Email from "./modalcomponents/Email";

export default function Parent(props: any) {
  const { launch, closeModal} = props;

  return (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Launch</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => {closeModal()
          }}>
            Close
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <CoreInfo launch={launch}></CoreInfo>
        <LaunchInfo launch={launch} showButton={true}></LaunchInfo>
        <StatusInfo launch={launch}></StatusInfo>
        <MissionInfo launch={launch}></MissionInfo>
        <LocationInfo launch={launch}></LocationInfo>
        <Email launch={launch}></Email>
        <IonButton onClick={() => console.log(launch)}>Display Launch in Console</IonButton>
      </IonCard>
    </IonContent>
  </>)

}