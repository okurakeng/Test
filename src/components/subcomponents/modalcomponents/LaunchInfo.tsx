import { IonItem, IonLabel } from "@ionic/react";
import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";

export default function LaunchInfo(props: any) {
  const { launch } = props;

  const { dateGenUTC, dateGen } = repeatedFunctions();

  return (
    <IonItem>
      <IonLabel>
        <h2>Launch Summary:</h2>
        <p className="ion-text-wrap">
          <b>Launch time:</b>{" "}
          <span>
            <abbr title={launch.net_precision.description}>
              {dateGenUTC(launch.net, launch.net_precision, true)}
            </abbr>
          </span>
        </p>

        <p className="ion-text-wrap">
          <b>Your Local Launch time:</b>{" "}
          <span>{dateGen(launch.net, launch.net_precision, true)}</span>
        </p>

        <p className="ion-text-wrap">
          <b>Launch Location:</b>{" "}
          <span>
            {launch.pad.name}, {launch.pad.country_code}
          </span>
        </p>

        <p className="ion-text-wrap">
          <b>Launch Vehicle:</b>{" "}
          <span>{launch.rocket.configuration.full_name}</span>
        </p>
      </IonLabel>
    </IonItem>
  );
}
