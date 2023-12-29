import { IonButton, IonItem, IonLabel } from "@ionic/react";
import "../../Launch.css";
import CustomImage from "../CustomImage";

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
        <CustomImage className={""} image_url={launch.pad.map_image} />
        {/* <img src={launch.pad.map_image} /> */}
        {/* <p className="ion-text-wrap">
          <b>Stats:</b>{" "}
          <span>
            There has been {launch.pad.total_launch_count} from{" "}
            {launch.pad.name}, and {launch.pad.location.total_launch_count} from
            the {launch.pad.location.name} overall.
          </span>
        </p> */}
      </IonLabel>
    </IonItem>
  );
}
