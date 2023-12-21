import { IonButton, IonItem, IonLabel } from "@ionic/react";
import "../Launch.css";

export default function Email(props: any) {
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

    if (precision.id >= 1) {
      return `~${net.substring(net.indexOf("T") + 1, net.length - 4)}, ${
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

  console.log(launch);
  return (
    <IonItem>
      <IonButton
        onClick={() => {
          try { 
            cordova.plugins.email.open({
              app: "outlook",
              subject: `Next Launch: ${launch.name}`,
              body: `Hey! Check it out. ${
                launch.mission.name
              } is launching soon!<br><b>Launch Time:</b> ${dateGen(
                launch.net,
                launch.net_precision,
                true
              )}<br><b>Launch Vehicle</b> ${
                launch.rocket.configuration.full_name
              }<br>  <img src="${
                launch.image
              }" alt="Your Image" style="width: 100%; height: auto; display: block;">\nI got this info from: <a href="https://rockets-rahhhh.web.app/data">Rocket Rahhhh</a>`,
              isHtml: false,
            });
          } catch {
            alert("Feature isn't supported :(");
          }
        }}
      >
        Email Outlook (recommend)
      </IonButton>

      <IonButton
        onClick={() => {
          try {
            cordova.plugins.email.open({
              app: "outlook",
              subject: `Next Launch: ${launch.name}`,
              body: `Hey! Check it out. ${
                launch.mission.name
              } is launching soon!\nLaunch Time: ${dateGen(
                launch.net,
                launch.net_precision,
                true
              )}\nLaunch Vehicle: ${
                launch.rocket.configuration.full_name
              }\nI got this info from: https://rockets-rahhhh.web.app/data`,
              isHtml: false,
            });
          } catch {
            alert("Feature isn't supported :(");
          }
        }}
      >
        Email (Other)
      </IonButton>
    </IonItem>
  );
}
