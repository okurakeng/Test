import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonProgressBar,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import "./Launch.css";
import LaunchInfo from "./subcomponents/LaunchInfo";
import LocationInfo from "./subcomponents/LocationInfo";
import MissionInfo from "./subcomponents/MissonInfo";
import CoreInfo from "./subcomponents/CoreInfo";
import StatusInfo from "./subcomponents/StatusInfo";
import FeaturedLaunches from "./subcomponents/FeaturedLaunch";
import Email from "./subcomponents/Email";
import { Haptics, ImpactStyle } from '@capacitor/haptics';

export default function LaunchTimeline(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState(0);
  const hapticsSelectionStart = async () => {
    await Haptics.selectionStart();
    await Haptics.selectionChanged();
  };
  
  let loadingImages = [
    "https://cdn.dribbble.com/users/2882885/screenshots/7861928/media/a4c4da396c3da907e7ed9dd0b55e5031.gif",
    "https://media.tenor.com/DHkIdy0a-UkAAAAC/loading-cat.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGZoODhpYm5hM2V6ZGdidGRtYnM3MnliaHRoeWR2dmJrM3g3bHltdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mFTRCmlZgMEr5CHmOV/giphy.gif",
    "https://64.media.tumblr.com/bdaea39db57dc0b48d763262514268db/tumblr_mgj44mNyST1s199fdo1_500.gif",
    "https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif",
  ];

  const displayLaunches = (props: any) => {
    const { launches, date } = props;
    if (launches.length > 0) {
      // console.log(orbits);
      return (
        <>
          <IonGrid>
            <IonItem className="rows">
              <h1>Featured Launch:</h1>
            </IonItem>
            
            <FeaturedLaunches launch={launches[0]}></FeaturedLaunches>

            <IonItem className="rows">
              <h1>Other Launches:</h1>
            </IonItem>

            {launches.slice(1).map((launch: any, index: number) => {
              return (
                <IonItem className="rows" key={index}>
                  <img
                    className="specialImage1"
                    alt="Img missing "
                    src={launch.image}
                  />
                  <IonLabel>
                    {" "}
                    |{" "}
                    {launch.mission
                      ? launch.mission.name
                      : launch.name.substring(launch.name.indexOf("|") + 1)}
                  </IonLabel>

                  <IonButton
                    onClick={() => {
                      setID(launch.id);
                      setIsOpen(true);
                      hapticsSelectionStart();
                    //  navigator.vibrate([100])
                    }}
                  >
                    More Info
                  </IonButton>

                  <IonModal isOpen={isOpen && launch.id == id}>
                    <IonHeader>
                      <IonToolbar>
                        <IonTitle>Launch</IonTitle>
                        <IonButtons slot="end">
                          <IonButton onClick={() => {setIsOpen(false)
                          navigator.vibrate([100,100,100])
                          }}>
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
                        <Email launch={launch}></Email>
                      </IonCard>
                    </IonContent>
                  </IonModal>
                </IonItem>
              );
            })}

            <IonItem className="rows">
              <h1>Attributions:</h1>
            </IonItem>
            <IonItem className="rows">
              <p className="ion-label">
                Created Ionic React with Axios. All data courtesy of
                thespacedevs's API.{" "}
                <a href="https://lldev.thespacedevs.com/docs/">
                  See their website for more info
                </a>
                . Some data is inaccurate due to using the free dev API. Date
                last updated {date.toString()}
              </p>
            </IonItem>
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
