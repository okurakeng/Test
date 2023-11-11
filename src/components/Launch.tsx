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
import LaunchInfo from "./LaunchInfo";
import LocationInfo from "./LocationInfo";
import MissionInfo from "./MissonInfo";
import CoreInfo from "./CoreInfo";
import StatusInfo from "./StatusInfo";

export default function LaunchTimeline(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState(0);

  let loadingImages = [
    "https://cdn.dribbble.com/users/2882885/screenshots/7861928/media/a4c4da396c3da907e7ed9dd0b55e5031.gif",
    "https://media.tenor.com/DHkIdy0a-UkAAAAC/loading-cat.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGZoODhpYm5hM2V6ZGdidGRtYnM3MnliaHRoeWR2dmJrM3g3bHltdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mFTRCmlZgMEr5CHmOV/giphy.gif",
    "https://64.media.tumblr.com/bdaea39db57dc0b48d763262514268db/tumblr_mgj44mNyST1s199fdo1_500.gif",
    "https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif",
  ];
  const displayLaunches = (props: any) => {
    const { launches } = props;
    if (launches.length > 0) {
      // console.log(orbits);
      return (
        <>
          <IonGrid>
            <IonItem className="rows">
              <h1>Attributions:</h1>
            </IonItem>
            <IonItem className="rows">
              <p className="ion-label">
                Created Ionic React with Axiom. All data cutesy of
                thespacedevs's API.{" "}
                <a href="https://lldev.thespacedevs.com/docs/">
                  See their website for more info
                </a>. Some data is inaccurate due to using the free dev API.
              </p>
            </IonItem>

            <IonItem className="rows">
              <h1>Launches:</h1>
            </IonItem>

            {launches.map((launch: any, index: number) => {
              return (
                <IonItem className="rows" key={index}>
                  <IonLabel>
                    {launch.mission
                      ? launch.mission.name
                      : launch.name.substring(launch.name.indexOf("|") + 1)}
                  </IonLabel>

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
                        <CoreInfo launch={launch}></CoreInfo>
                        <LaunchInfo launch={launch}></LaunchInfo>
                        <StatusInfo launch={launch}></StatusInfo>
                        <MissionInfo launch={launch}></MissionInfo>
                        <LocationInfo launch={launch}></LocationInfo>
                      </IonCard>
                    </IonContent>
                  </IonModal>
                </IonItem>
              );
            })}
          </IonGrid>
        </>
      );
    } else {
      return (
        <IonGrid>
          <IonProgressBar type="indeterminate" color="primary"></IonProgressBar>{" "}
          <h3>
            Loading Launches...this may take a while as we contact the
            thespacedevs API.
          </h3>
          <img
            src={
              loadingImages[Math.floor(Math.random() * loadingImages.length)]
            }
          ></img>
          <IonProgressBar type="indeterminate" color="primary"></IonProgressBar>
        </IonGrid>
      );
    }
  };

  return <>{displayLaunches(props)}</>;
}
