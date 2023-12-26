import { IonButton, IonIcon, IonItem, IonLabel } from "@ionic/react";
import "../Launch.css";
import { repeatedFunctions } from "../../hooks/repeatedFunctions";
import { mail } from 'ionicons/icons';

export default function Email(props: any) {
  const { launch } = props;

  const { dateGen } = repeatedFunctions();

  console.log(launch)
  let body = `Hey! Check it out. ${
    launch.mission.name
  } is launching soon!\nLaunch Time: ${dateGen(
    launch.net,
    launch.net_precision,
    true
  )}\nLaunch Vehicle: ${
    launch.rocket.configuration.full_name
  }\nI got this info from: https://okaykenji.github.io/data`;



  // console.log(launch);
  return (
    <IonItem>
      <IonButton
        href={`mailto:?subject=${encodeURIComponent(launch.mission.name)}&body=${encodeURIComponent(body)}`}
      >
        Email<IonIcon icon={mail}></IonIcon>
      </IonButton>
      
    </IonItem>
  );
}