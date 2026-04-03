// ─────────────────────────────────────────────────────────────
// src/context/AppContext.jsx
//
// Création du contexte global de l'application.
// On utilise `createContext` de React pour créer un "tunnel"
// qui permet de partager des données entre tous les composants
// sans devoir passer des props manuellement à chaque niveau.
//
// Ce fichier exporte UNIQUEMENT le contexte vide.
// La logique (state, fonctions) est dans AppProvider.jsx.
// ─────────────────────────────────────────────────────────────

import { createContext } from "react";

// Création du contexte avec une valeur par défaut nulle.
// La valeur réelle sera fournie par AppProvider.
const AppContext = createContext(null);

export default AppContext;
