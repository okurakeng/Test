import { IonButton, IonItem, IonLabel, IonModal } from "@ionic/react";
import React, { useState } from "react";
import LaunchModal from "./LaunchModal";
import CustomImage from "./CustomImage";

export default function Parent(props: any) {
  const { launch } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState(0);

  const openModal = () => {
    setID(launch.id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <IonItem className="rows">
      <CustomImage className={"specialImage1"} image_url={launch.image} />
      {/* <img
    className=""
    alt="Img missing "
    src={launch.image}
  /> */}
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

      <IonModal isOpen={isOpen && launch.id == id}>
        <LaunchModal launch={launch} closeModal={closeModal}></LaunchModal>
      </IonModal>
    </IonItem>
  );
}
