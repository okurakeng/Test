import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { rocket } from "ionicons/icons";
import Parent from "../components/Parent";

const Past: React.FC = () => {
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonIcon icon={rocket}></IonIcon> Past 100 Launches{" "}
            <IonIcon icon={rocket}></IonIcon>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Past 100 Launches</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Parent
          url={
            "https://ll.thespacedevs.com/2.2.0/launch/previous/?format=json&limit=100"
          }
          dataName={"dataPast"}
          dataDate={"dataPastDate"}
        />
      </IonContent>
    </IonPage>
  );
};

export default Past;
