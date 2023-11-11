import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Launch.css";

export default function NoteTimeline(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState(0);

  const dateGen = (net: any, precision: any, includeTime: boolean) => {
    if (!(net && precision))
      return 'Error';

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

    if (precision.id >=14 ) {
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

  const displayLaunches = (props: any) => {
    const { launches } = props;
    if (launches.length > 0) {
      // console.log(orbits);
      return (
        <IonGrid>
          {launches.map((launch: any, index: number) => {
            return (
              <IonItem className="rows" key={index}>
                <IonLabel>{launch.mission ? launch.mission.name : launch.name.substring(launch.name.indexOf("|")+1)}</IonLabel>

                <IonButton
                  onClick={() => {
                    setID(launch.id);
                    setIsOpen(true);
                  }}
                >
                  More Info
                </IonButton>

                <IonModal isOpen={isOpen && launch.id == id}>
                  <IonHeader>
                    <IonToolbar>
                      <IonTitle>Launch</IonTitle>
                      <IonButtons slot="end">
                        <IonButton onClick={() => setIsOpen(false)}>
                          Close
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent>
                    <IonCard>
                      <img alt="Silhouette of mountains" src={launch.image} />
                      <IonCardHeader>
                        <IonCardTitle>{launch.mission ? launch.mission.name : launch.name.substring(launch.name.indexOf("|")+1)}</IonCardTitle>
                        <IonCardSubtitle>
                          {launch.rocket.configuration.name} |{" "}
                          {dateGen(launch.net, launch.net_precision, false)}
                        </IonCardSubtitle>
                      </IonCardHeader>
                      <IonItem>
                        <IonLabel>
                          <h2>Launch Info:</h2>
                          <p>
                            <b>Launch time:</b>{" "}
                            <span>
                              {dateGen(launch.net, launch.net_precision, true)}
                            </span>
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

                      <IonItem>
                        <IonLabel>
                          <h2>Mission Info:</h2>
                          <p>
                            <b>Mission:</b> <span>{launch.mission ? launch.mission.name : launch.name.substring(launch.name.indexOf("|")+1)}</span>
                          </p>
                          <p className="ion-text-wrap">
                            <b>Description:</b>{" "}
                            <span>{launch.mission ? launch.mission.description : "Oh no! Error!"}</span>
                          </p>
                          <p>
                            <b>Type:</b> <span>{launch.mission ? launch.mission.type : "Oh no! Error!"}</span>
                          </p>
                          <p>
                            <b>Orbit:</b>{" "}
                            <span>{launch.mission ? launch.mission.orbit.name : "Oh no! Error!"}</span>
                          </p>
                          <p>{getAgency(launch.mission ? launch.mission.agencies : [])}</p>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>
                          <h2>Launch Location:</h2>
                          <p className="ion-text-wrap">
                            <b>Launch Pad:</b> <span>{launch.pad.name}</span>
                          </p>
                          <p className="ion-text-wrap">
                            <b>Location:</b>{" "}
                            <span>{launch.pad.location.name}</span>
                          </p>
                          <img src={launch.pad.map_image} />
                        </IonLabel>
                      </IonItem>
                    </IonCard>
                  </IonContent>
                </IonModal>
              </IonItem>
            );
          })}
        </IonGrid>
      );
    } else {
      return (
        <IonGrid>
          <IonProgressBar type="indeterminate" color="primary"></IonProgressBar>{" "}
         
          <h3>
            Loading Launches...this may take a while as we contact the API
          </h3>
        
          <IonProgressBar type="indeterminate" color="primary"></IonProgressBar>
        </IonGrid>
      );
    }
  };

  return <>{displayLaunches(props)}</>;
}
