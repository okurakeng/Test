import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
import Agency from "./Agency";
import Rocket from "./Rocket";
import { IonItem, IonLabel } from "@ionic/react";

export default function AdditionalInfo(props: any) {
  const { launch } = props;

  function additionalInfo() {
    let listOfAgenciesUrls = [launch.launch_service_provider.url];

    if (launch.mission && launch.mission.agencies) {
      let agencies = launch.mission.agencies;
      for (let agency of agencies) {
        //  console.log(agency.name)
        listOfAgenciesUrls.push(agency.url);
      }
      listOfAgenciesUrls = [...new Set(listOfAgenciesUrls)];
    }

    return (
      <IonItem>
        <IonLabel>
          <h2>Learn More:</h2>
          {listOfAgenciesUrls.map((item, index) => {
            return (
              <div className="ion-text-wrap" key={index}>
                <Agency url={item}></Agency>
              </div>
            );
          })}

          <div className="ion-text-wrap">
            <Rocket url={launch.rocket.configuration.url}></Rocket>
          </div>
        </IonLabel>
      </IonItem>
    );
  }

  return additionalInfo();
}
