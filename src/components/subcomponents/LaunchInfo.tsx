import { IonItem, IonLabel } from "@ionic/react";
import "../Launch.css";
import { repeatedFunctions } from "../../hooks/repeatedFunctions";

export default function LaunchInfo(props: any) {
  const { launch } = props;

  const { dateGen } = repeatedFunctions();

  return (
    <IonItem>
      <IonLabel>
        <h2>Launch Info:</h2>
        <p className="ion-text-wrap">
          <b>Launch time:</b>{" "}
          <span><abbr title={launch.net_precision.description}>{dateGen(launch.net, launch.net_precision, true)} </abbr></span>
        </p>
        <p className="ion-text-wrap">
          <b>Launch Service Provider:</b>{" "}
          <span>{launch.launch_service_provider.name}</span>
        </p>
        <p className="ion-text-wrap">
          <b>Launch Vehicle:</b>{" "}
          <span>{launch.rocket.configuration.full_name}</span>
        </p>
      </IonLabel>
    </IonItem>
  );
}
