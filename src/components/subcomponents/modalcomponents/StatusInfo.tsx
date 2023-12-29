import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  useIonPopover,
} from "@ionic/react";
import "../../Launch.css";
import { ellipse, helpCircleOutline } from "ionicons/icons";

export default function StatusInfo(props: any) {
  //
  const displayStatus = (props: any) => {
    const { launch } = props;

    const Popover = () => (
      <IonContent className="ion-padding">
        {launch.status.description}
      </IonContent>
    );

    const [present, dismiss] = useIonPopover(Popover, {
      onDismiss: (data: any, role: string) => dismiss(data, role),
    });

    let color = "";
    switch (launch.status.id) {
      case 8: //TBC
        color = "medium";
        break;
      case 1: // Go
        color = "primary";
        break;
      case 3: // Success
        color = "success";
        break;
      case 4: // Fail
        color = "danger";
        break;
      case 5: // Hold
        color = "warning";
        break;
      case 6: // In Flight
        color = "primary";
        break;
      case 7: // Partial Failure
        color = "warning";
        break;
      case 2: // TBD
        color = "primary";
        break;
      default:
        color = "medium";
        break;
    }
    if (launch.status.id == 8 || launch.status.id == 2) {
      return <></>; // tbd or tbc
    } else if (launch.status.id == 4 || launch.status.id == 7) {
      return (
        <IonItem>
          <IonLabel>
            <h2>Launch Status:</h2>
            <p className="ion-text-wrap">
              <b>Launch Status:</b>{" "}
              <IonIcon color={color} icon={ellipse}></IonIcon>{" "}
              <span
                id="click-trigger"
                style={{ borderBottom: "1px dotted " }}
                onClick={(e: any) =>
                  present({
                    event: e,
                    onDidDismiss: (e: CustomEvent) =>
                      console.log(
                        `Popover dismissed with role: ${e.detail.role}`
                      ),
                  })
                }
              >
                {launch.status.name}{" "}
                <IonIcon icon={helpCircleOutline}></IonIcon>
              </span>
            </p>

            <p className="ion-text-wrap">
              <b>Failure reason:</b> <span>{launch.failreason}</span>
            </p>
          </IonLabel>
        </IonItem>
      );
    } else {
      return (
        <IonItem>
          <IonLabel>
            <h2>Launch Status:</h2>
            <p className="ion-text-wrap">
              <b>Launch Status:</b>{" "}
              <IonIcon color={color} icon={ellipse}></IonIcon>{" "}
              <span
                id="click-trigger"
                style={{ borderBottom: "1px dotted " }}
                onClick={(e: any) =>
                  present({
                    event: e,
                    onDidDismiss: (e: CustomEvent) =>
                      console.log(
                        `Popover dismissed with role: ${e.detail.role}`
                      ),
                  })
                }
              >
                {launch.status.name}{" "}
                <IonIcon icon={helpCircleOutline}></IonIcon>
              </span>
            </p>
          </IonLabel>
        </IonItem>
      );
    }
  };

  return <>{displayStatus(props)}</>;
}
