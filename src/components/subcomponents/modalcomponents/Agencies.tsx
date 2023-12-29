import "../../Launch.css";
import { repeatedFunctions } from "../../../hooks/repeatedFunctions";
import Agency from "./Agency";
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";

export default function Agencies(props: any) {
  const { listOfAgenciesUrls } = props;
  const [isOpen, setIsOpen] = useState(false);


  
    return (
        <>
        <IonButton
          className="ion-text-wrap"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          More Info on Agencies
        </IonButton>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Agencies</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
    
          {listOfAgenciesUrls.map((item: any, index :any) => {
            return (
              <div className="ion-text-wrap" key={index}>
                <Agency url={item}></Agency>
              </div>
            );
          })}
               </IonContent>
          </IonModal>
        </>
          

 
    );
  
}
