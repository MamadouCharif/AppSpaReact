
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import des composants de mise en page
import Navbar from "./components/Navbar";

// Import des pages
import Home     from "./pages/Home";
import About    from "./pages/About";
import Contact  from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GithubSearch from "./pages/GithubSearch";


function App() {
  return (
  
    <BrowserRouter>
      {/* La Navbar est en dehors de <Routes> : elle s'affiche sur toutes les pages */}
      <Navbar />

      {/* Zone de contenu principale */}
      <main className="main-content">
        <Routes>
          {/* Route d'accueil — chemin exact "/" */}
          <Route path="/"        element={<Home />}     />

          {/* Route À propos */}
          <Route path="/about"   element={<About />}    />

          {/* Route Contact */}
          <Route path="/contact" element={<Contact />}  />
          <Route path="/api" element={<GithubSearch />}  />

          {/* Route wildcard : capture toutes les URLs non définies ci-dessus.
              Doit toujours être placée EN DERNIER. */}
          <Route path="*"        element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
