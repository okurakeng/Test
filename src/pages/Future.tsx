import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Home.css";
import { rocket } from 'ionicons/icons';
import Parent from "../components/Parent";

const Future: React.FC = () => {
  try {
  AndroidFullScreen.immersiveMode(()=>{console.log(":)")}, console.log(":("))
  } catch {
    
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle><IonIcon icon={rocket}></IonIcon> Next 100 Launches <IonIcon icon={rocket}></IonIcon></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Next 100 Launches</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <FutureParent /> */}
        <Parent url={"https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json&limit=100"} dataName={"dataFuture"} dateName={"dataFutureDate"} />
        {/* <IonButton onClick={ () => {}>Click Me!</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Future;
