

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    // Plugin officiel Vite pour React (JSX transform, Fast Refresh)
    react(),
  ],

  server: {
    // En développement : redirige toutes les requêtes vers index.html
    // pour éviter les erreurs 404 sur les routes directes (/about, /contact…)
    historyApiFallback: true,

    port: 5173, // Port par défaut de Vite
  },

  preview: {
    // Même comportement pour le serveur de prévisualisation du build
    port: 4173,
  },

  build: {
    // Dossier de sortie du build de production
    outDir: "dist",
    // Active le code splitting automatique pour les performances
    rollupOptions: {
      output: {
        manualChunks: {
          // Sépare React dans un chunk vendor dédié (meilleur cache navigateur)
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
