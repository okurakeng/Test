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
import Parent from "../components/Parent";
import { rocket } from 'ionicons/icons';

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
        <Parent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
