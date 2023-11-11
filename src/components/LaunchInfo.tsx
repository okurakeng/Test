import { IonItem, IonLabel } from "@ionic/react";
import "./Launch.css";

export default function LaunchInfo(props: any) {
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
    <IonItem>
      <IonLabel>
        <h2>Launch Info:</h2>
        <p>
          <b>Launch time:</b>{" "}
          <span>{dateGen(launch.net, launch.net_precision, true)}</span>
        </p>
        <p className="ion-text-wrap">
          <b>Launch Service Provider:</b>{" "}
          <span>{launch.launch_service_provider.name}</span>
        </p>
        <p>
          <b>Launch Vehicle:</b>{" "}
          <span>{launch.rocket.configuration.full_name}</span>
        </p>
      </IonLabel>
    </IonItem>
  );
}
