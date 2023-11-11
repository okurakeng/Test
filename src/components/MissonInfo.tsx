import {
  IonItem,
  IonLabel
} from "@ionic/react";
import "./Launch.css";

export default function MissionInfo(props: any) {
  const { launch } = props;
  // agency error handling
  const getAgency = (agencies: any) => {
    if (agencies.length == 0) {
      return (
        <>
          <b>Agency:</b> <span>Not Available</span>
        </>
      );
    } else {
      let list = "";
      for (let agency of agencies) {
        list = agency.name + " ";
      }

      return (
        <>
          <b>Agencies:</b> <span>{list}</span>{" "}
        </>
      );
    }
  };

  return (
    <IonItem>
      <IonLabel>
        <h2>Mission Info:</h2>
        <p className="ion-text-wrap">
          <b className="ion-text-wrap">Mission:</b>{" "}
          <span>
            {launch.mission
              ? launch.mission.name
              : launch.name.substring(launch.name.indexOf("|") + 1)}
          </span>
        </p>
        <p className="ion-text-wrap">
          <b>Description:</b>{" "}
          <span>
            {launch.mission ? launch.mission.description : "Oh no! Error!"}
          </span>
        </p>
        <p className="ion-text-wrap">
          <b>Type:</b>{" "}
          <span>{launch.mission ? launch.mission.type : "Oh no! Error!"}</span>
        </p>
        <p className="ion-text-wrap">
          <b>Orbit:</b>{" "}
          <span>
            {launch.mission ? launch.mission.orbit.name : "Oh no! Error!"}
          </span>
        </p>
        <p className="ion-text-wrap">{getAgency(launch.mission ? launch.mission.agencies : [])}</p>
      </IonLabel>
    </IonItem>
  );
}
