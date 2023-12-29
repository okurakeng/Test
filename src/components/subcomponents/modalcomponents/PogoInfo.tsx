import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
import { IonItem, IonLabel } from "@ionic/react";
import GaugeChart from "react-gauge-chart";

export default function PogoInfo(props: any) {
  const { launch } = props;
  // console.log(launch.probability);
  // console.log(launch.weather_concerns);

  function weatherPogo() {
    if (launch.probability && launch.weather_concerns) {
      return (
        <IonItem>
          <IonLabel>
            <h2>Weather Info:</h2>
            <p className="ion-text-wrap">
              <b>Pogo:</b> <span>{launch.probability}%</span>
            </p>
            <p className="ion-text-wrap">
              <b>Concern(s):</b> <span>{launch.weather_concerns}</span>
            </p>
            <GaugeChart
              id={`${Math.random()}`}
              nrOfLevels={3}
              colors={["#EA4228", "#F5CD19", "#5BE12C"]}
              percent={launch.probability / 100}
            />
          </IonLabel>
        </IonItem>
      );
    } else return <></>;
  }

  return weatherPogo();
}
