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
import PastParent from "../components/PastParent";
  
  const Past: React.FC = () => {
    return (
      <IonPage id="home-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle><IonIcon icon={rocket}></IonIcon> Past 100 Launches <IonIcon icon={rocket}></IonIcon></IonTitle>
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
          <PastParent />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Past;
  