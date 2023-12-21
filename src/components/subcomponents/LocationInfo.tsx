import {
  IonButton,
  IonItem,
  IonLabel
} from "@ionic/react";
import "../Launch.css";

export default function LocationInfo(props: any) {
  const { launch } = props;
  
  return (
    <IonItem>
      <IonLabel>
        <h2>Launch Location:</h2>
        <p className="ion-text-wrap">
          <b>Launch Pad:</b> <span>{launch.pad.name}</span>
        </p>
        <p className="ion-text-wrap">
          <b>Location:</b> <span>{launch.pad.location.name}</span>
        </p>
        <img src={launch.pad.map_image} />
      </IonLabel>
    </IonItem>
  );
}
