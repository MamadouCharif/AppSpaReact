
import React from "react";
import ReactDOM from "react-dom/client";

// Composant racine contenant la configuration des routes
import App from "./App";

// Fournisseur du contexte global (username, etc.)
import AppProvider from "./context/AppProvider";

// Styles globaux de l'application
import "./styles/global.css";
import "./styles/index.css"

//  Montage de l'application 
// React 18 utilise `createRoot` (remplace l'ancien `ReactDOM.render`)
ReactDOM.createRoot(
  // On cible la div#root définie dans index.html
  document.getElementById("root")
).render(
  // <React.StrictMode> active des avertissements supplémentaires
  // en développement (double-render intentionnel pour détecter les bugs)
  <React.StrictMode>
    {/* AppProvider enveloppe tout pour partager le contexte global */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
