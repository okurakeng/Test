import { IonContent, IonIcon, IonItem, IonLabel, useIonPopover } from "@ionic/react";
import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
import { helpCircleOutline } from "ionicons/icons";
export default function MissionInfo(props: any) {
  const { dateGenUTC, dateGen } = repeatedFunctions();
  const { launch } = props;

  const Popover = () => (
    <IonContent className="ion-padding">
      {launch.net_precision?.description}
    </IonContent>
  );

  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });

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
      // console.log(agencies)
      for (let agency of agencies) {
        //  console.log(agency.name)
        list += agency.name + "; ";
      }

      return (
        <>
          <b>Agencies:</b> <span>{list}</span>{" "}
        </>
      );
    }
  };

  function getProgram(programs: any) {
    if (programs.length == 0) {
      return (
        <>
          <b>Program:</b> <span>Not Available</span>
        </>
      );
    } else {
      let list = "";
      // console.log(agencies)
      for (let program of programs) {
        //  console.log(agency.name)
        list += program.name + "; ";
      }

      return (
        <>
          <b>Program:</b> <span>{list}</span>{" "}
        </>
      );
    }
  }

  return (
    <>
      <IonItem>
        <IonLabel>
          <h2>Detailed Mission Info:</h2>
          <p className="ion-text-wrap">
            <b>Launch Vehicle:</b>{" "}
            <span>{launch.rocket.configuration.full_name}</span>
          </p>
          <p className="ion-text-wrap">
            <b>Launch Service Provider:</b>{" "}
            <span>{launch.launch_service_provider.name}</span>
          </p>
          <p className="ion-text-wrap">
            <b>Launch time:</b>{" "}
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
              {dateGenUTC(launch.net, launch.net_precision, true)} <IonIcon icon={helpCircleOutline}></IonIcon>
            </span>
            <span>
              {launch.net_precision?.id < 5 ? (
                <>
                  {" "}
                  (Window:{" "}
                  {dateGenUTC(
                    launch.window_start,
                    launch.net_precision,
                    true
                  )}{" "}
                  - {dateGenUTC(launch.window_end, launch.net_precision, true)}{" "}
                  )
                </>
              ) : (
                <></>
              )}
            </span>
          </p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
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
            <span>
              {launch.mission ? launch.mission.type : "Oh no! Error!"}
            </span>
          </p>
          <p className="ion-text-wrap">
            <b>Orbit:</b>{" "}
            <span>
              {launch.mission ? launch.mission.orbit.name : "Oh no! Error!"}
            </span>
          </p>
          <p className="ion-text-wrap">
            {getAgency(launch.mission ? launch.mission.agencies : [])}
          </p>

          <p className="ion-text-wrap">
            {getProgram(launch.program ? launch.program : [])}
          </p>
        </IonLabel>
      </IonItem>
    </>
  );
}
