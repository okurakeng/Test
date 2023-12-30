import { IonButton, IonItem, IonLabel, IonModal } from "@ionic/react";
import React, { useRef, useState } from "react";
import LaunchModal from "./LaunchModal";
import CustomImage from "./CustomImage";

export default function Parent(props: any) {
  const { launch, devMode } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState(0);

  const modal = useRef<HTMLIonModalElement>(null);

  const openModal = () => {
    setID(launch.id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IonItem className="rows"   onClick={() => {
            openModal();
          }}>
            
        <CustomImage className={"specialImage1"} image_url={launch.image} />

        <IonLabel>
          {" "}
          |{" "}
          {launch.mission
            ? launch.mission.name
            : launch.name.substring(launch.name.indexOf("|") + 1)}
        </IonLabel>

        <IonButton
          onClick={() => {
            openModal();
          }}
        >
          More Info
        </IonButton>
      </IonItem>
      <IonModal isOpen={isOpen && launch.id == id} ref={modal} initialBreakpoint={1} breakpoints={[0, 1]} onDidDismiss={() => setIsOpen(false)}>
        <LaunchModal launch={launch} closeModal={closeModal} devMode={devMode}></LaunchModal>
      </IonModal>
    </>
  );
}
