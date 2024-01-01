import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  useIonPopover,
} from "@ionic/react";
import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
import { helpCircleOutline   } from "ionicons/icons";


// <ion-icon name="help-circle-outline"></ion-icon>

export default function LaunchInfo(props: any) {
  const { launch } = props;

  const Popover = () => (
    <IonContent className="ion-padding">
      {launch.net_precision ? launch.net_precision.description : "API didn't provide precision"}
    </IonContent>
  );

  const { dateGenUTC, dateGen } = repeatedFunctions();

  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });

  return (
    <IonItem>
      <IonLabel>
        <h2>Launch Summary:</h2>
        <p className="ion-text-wrap">
          <b>Launch time:</b>{" "}
          <span
            id="click-trigger" style={{ borderBottom: '1px dotted ' }}
            onClick={(e: any) =>
              present({
                event: e,
                onDidDismiss: (e: CustomEvent) =>
                  console.log(`Popover dismissed with role: ${e.detail.role}`),
              })
            }
          >
            {dateGenUTC(launch.net, launch.net_precision, true)} <IonIcon icon={helpCircleOutline}></IonIcon>
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
