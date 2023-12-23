import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import "../Launch.css";
import { repeatedFunctions } from "../../hooks/repeatedFunctions";

export default function CoreInfo(props: any) {
  const { launch } = props;

  const { dateGen } = repeatedFunctions();
  return (
    <>
      <img alt="Img missing " src={launch.image} />
      <IonCardHeader>
        <IonCardTitle>
          {launch.mission
            ? launch.mission.name
            : launch.name.substring(launch.name.indexOf("|") + 1)}
        </IonCardTitle>
        <IonCardSubtitle>
          {launch.rocket.configuration.name} |{" "}
          {dateGen(launch.net, launch.net_precision, false)}
        </IonCardSubtitle>
      </IonCardHeader>{" "}
    </>
  );
}
