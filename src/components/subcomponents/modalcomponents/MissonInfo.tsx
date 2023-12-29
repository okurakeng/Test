import { IonItem, IonLabel } from "@ionic/react";
import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
export default function MissionInfo(props: any) {
  const { dateGenUTC, dateGen } = repeatedFunctions();
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
            <span>
              <abbr title={launch.net_precision.description}>
                {dateGenUTC(launch.net, launch.net_precision, true)}
              </abbr>

              {launch.net_precision.id < 5 ? (
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
        </IonLabel>
      </IonItem>
    </>
  );
}
