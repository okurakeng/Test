import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";

export default function NoteTimeline(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState(0);

  const displayOrbits = (props: any) => {
    const { orbits } = props;
    if (orbits.length > 0) {
      // console.log(orbits);
      return (
        <IonList>
          {orbits.map((orbit: any, index: number) => {
            return (
              <IonItem key={index}>
                <IonItem>
                  <IonLabel>Orbit {orbit.name}</IonLabel>
                  <IonButton onClick={() => {setID(orbit.id); setIsOpen(true)}}>More Info</IonButton>
                  <IonModal isOpen={isOpen && orbit.id==id}>
                    <IonHeader>
                      <IonToolbar>
                        <IonTitle>Orbit: {orbit.name}</IonTitle>
                        <IonButtons slot="end">
                          <IonButton onClick={() => setIsOpen(false)}>
                            Close
                          </IonButton>
                        </IonButtons>
                      </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                      <p>
                      Orbit: {orbit.name}
                      </p>
                      <p>
                      id: {orbit.id}
                      </p>
                      <p>
                      Orbit: {orbit.abbrev}
                      </p>
                    </IonContent>
                  </IonModal>
                </IonItem>
              </IonItem>
            );
          })}
        </IonList>
      );
    } else {
      return <h3>No orbits yet.</h3>;
    }
  };
  return <>{displayOrbits(props)}</>;
}
