import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Future from "./pages/Future";
import Past from "./pages/Past";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { caretBackOutline, caretForwardOutline } from "ionicons/icons";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" exact={true}>
            <Redirect to="/Data/Future" />
          </Route>
          <Route path="/Data" exact={true}>
            <Redirect to="/Data/Future" />
          </Route>

          <Route path="/Data/Future/" exact={true}>
            <Future />
          </Route>

          <Route path="/Data/Past/" exact={true}>
            <Past />
          </Route>
{/* 
          <Route path="/data/future/:id" exact={true} component={Future}>

          </Route>
          <Route path="/data/past/:id" exact={true} component={Past}>
         
          </Route> */}
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Past" href="/Data/Past">
            <IonIcon icon={caretBackOutline}></IonIcon>
            <IonLabel>Past</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/Data/Future">
            <IonIcon icon={caretForwardOutline}></IonIcon>
            <IonLabel>Future</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
