import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import "./Launch.css";

export default function CoreInfo(props: any) {
  const { launch } = props;

  const dateGen = (net: any, precision: any, includeTime: boolean) => {
    if (!(net && precision)) return "Error";

    let date = new Date(net);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (precision.id >= 14) {
      return `${date.getUTCFullYear()}`;
    }

    if (precision.id == 7) {
      return `${months[date.getMonth()]} ${date.getUTCFullYear()}`;
    }

    if (precision.id > 7) {
      return `${precision.name} ${date.getUTCFullYear()}`;
    }

    if (precision.id >= 5) {
      return `${
        months[date.getMonth()]
      } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
    }

    if (includeTime)
      return `${net.substring(net.indexOf("T") + 1, net.length - 1)}, ${
        months[date.getMonth()]
      } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
    else
      return `${
        months[date.getMonth()]
      } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  };

  return (
    <>
      <img alt="Silhouette of mountains" src={launch.image} />
      <IonCardHeader>
        <IonCardTitle>
          {launch.mission
            ? launch.mission.name
            : launch.name.substring(launch.name.indexOf("|") + 1)}
        </IonCardTitle>
        <IonCardSubtitle>
          {launch.rocket.configuration.name} |{" "}
          {dateGen(launch.net, launch.net_precision, false)}
        </IonCardSubtitle>
      </IonCardHeader>{" "}
    </>
  );
}
