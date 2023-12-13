import {
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
import FutureParent from "../components/FutureParent";
import Parent from "../components/Parent";

const Home: React.FC = () => {
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
