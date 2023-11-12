import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import "./Launch.css";
import { ellipse } from "ionicons/icons";

export default function StatusInfo(props: any) {
  //
  const displayStatus = (props: any) => {
    const { launch } = props;

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
    console.log(color)
    if (launch.status.id == 8 || launch.status.id == 2) {
      return <></>;
    } else {
      return (
        <IonItem>
          <IonLabel>
            <h2>Launch Status:</h2>
            <p className="ion-text-wrap">
              <b>Launch Status:</b>{" "}
              <IonIcon color={color} icon={ellipse}></IonIcon>{" "}
              <span>{launch.status.name}</span>
            </p>
          </IonLabel>
        </IonItem>
      );
    }
  };

  return <>{displayStatus(props)}</>;
}
