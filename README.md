# ◈ ma-mono-page

> SPA de démonstration — React 18 · Vite 5 · React Router DOM v6 · Context API

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:5173
```

---

## 📦 Stack technique

| Outil | Rôle |
|---|---|
| **React 18** | Bibliothèque UI, gestion de l'état |
| **Vite 5** | Bundler & serveur de dev avec HMR |
| **React Router DOM v6** | Routage client-side (BrowserRouter) |
| **Context API** | État global partagé (username) |
| **CSS Custom Properties** | Système de design tokens |

---

## 📁 Structure des fichiers

```
ma-mono-page/
├── index.html                 ← Point d'entrée HTML (div#root)
├── vite.config.js             ← Config Vite + historyApiFallback
├── package.json
└── src/
    ├── main.jsx               ← Montage React dans <AppProvider>
    ├── App.jsx                ← Configuration des <Routes>
    ├── context/
    │   ├── AppContext.jsx     ← createContext() — le contexte vide
    │   └── AppProvider.jsx    ← useState + Provider (logique)
    ├── components/
    │   └── Navbar.jsx         ← Navigation persistante avec NavLink
    ├── pages/
    │   ├── Home.jsx           ← / — formulaire de mise à jour username
    │   ├── About.jsx          ← /about — stack & architecture
    │   ├── Contact.jsx        ← /contact — formulaire avec validation
    │   └── NotFound.jsx       ← * — page 404
    └── styles/
        └── global.css         ← Styles globaux (design tokens, composants)
```

---

## 🗺️ Routes

| URL | Page | Description |
|---|---|---|
| `/` | Home | Accueil + mise à jour du username |
| `/about` | About | Stack technique + structure de fichiers |
| `/contact` | Contact | Formulaire avec validation |
| `*` | NotFound | Page 404 pour toute URL inconnue |

---

## 🔗 Contexte global

Le contexte est accessible depuis **n'importe quel composant** :

```jsx
import { useContext } from "react";
import AppContext from "../context/AppContext";

function MonComposant() {
  const { username, setUsername } = useContext(AppContext);
  return <p>Bonjour, {username} !</p>;
}
```

---

## ⚙️ Éviter les 404 sur les routes directes

En développement, Vite utilise `historyApiFallback: true` dans `vite.config.js`.

En **production** (nginx exemple) :
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 📜 Scripts disponibles

```bash
npm run dev      # Serveur de développement (port 5173)
npm run build    # Build de production dans /dist
npm run preview  # Prévisualisation du build (port 4173)
```
