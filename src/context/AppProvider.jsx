

import { useState } from "react";
import AppContext from "./AppContext";

/**
 * AppProvider — Composant fournisseur du contexte global.
 *
 * @param {React.ReactNode} children - Les composants enfants
 *        qui auront accès au contexte.
 */
function AppProvider({ children }) {
  //  State global partagé 
  // `username` : nom de l'utilisateur affiché dans toute l'app
  // `setUsername` : fonction pour le modifier depuis n'importe
  //                  quel composant enfant
  const [username, setUsername] = useState("Charif");

  //  Valeur exposée au contexte 
  // Tout ce qu'on place ici est accessible via useContext(AppContext)
  const contextValue = {
    username,       // La valeur actuelle du nom
    setUsername,    // La fonction pour mettre à jour le nom
  };

  // On enveloppe les enfants avec le Provider en lui passant la valeur
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
