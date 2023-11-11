import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Home.css";
import Parent from "../components/Parent";

const Home: React.FC = () => {
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Next 100 Launches</IonTitle>
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
