import { IonItem, IonLabel } from "@ionic/react";
import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
import Agency from "./Agency";
import Rocket from "./Rocket";

export default function LaunchInfo(props: any) {
  const { launch, showButton } = props;

  const { dateGenUTC, dateGen } = repeatedFunctions();

  return (
    <IonItem>
      <IonLabel>
        <h2>Launch Info:</h2>
        <p className="ion-text-wrap">
          <b>Launch time:</b>{" "}
          <span><abbr title={launch.net_precision.description}>{dateGenUTC(launch.net, launch.net_precision, true)}</abbr></span>
        </p>

        <p className="ion-text-wrap">
          <b>Your Local Launch time:</b>{" "}
          <span>{dateGen(launch.net, launch.net_precision, true)}</span>
        </p>

        <p className="ion-text-wrap">
          <b>Launch Service Provider:</b>{" "}
          <span>{launch.launch_service_provider.name}</span>
        </p>
        <p className="ion-text-wrap">
          <b>Launch Vehicle:</b>{" "}
          <span>{launch.rocket.configuration.full_name}</span>
        </p>
        
        <div className="ion-text-wrap">
          <Agency url={launch.launch_service_provider.url} showButton={showButton}></Agency>
        </div>
        <div className="ion-text-wrap">
          <Rocket url={launch.rocket.configuration.url} showButton={showButton}></Rocket>
        </div>
      </IonLabel>

     
    </IonItem>
  );
}
