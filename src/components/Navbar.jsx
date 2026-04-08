import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../context/AppContext";

function Navbar() {
  const { username } = useContext(AppContext);

  return (
    <header className="navbar">
      {/* Logo / Nom du site */}
      <NavLink to="/" className="navbar__brand" style={{color: "#FF8C00"}}>
        <span className="navbar__logo">◈</span>
        Massab Digital
      </NavLink>

      {/* Liens de navigation principaux */}
      <nav className="navbar__links" aria-label="Navigation principale">
        <NavLink to="/"       end>Accueil</NavLink>
        <NavLink to="/about"     >À propos</NavLink>
        <NavLink to="/api">API</NavLink>
        <NavLink to="/contact"   >Contact</NavLink>
      </nav>

      {/* Indicateur de l'utilisateur courant (depuis le contexte) */}
      <div className="navbar__user">
        <span className="navbar__user-icon">👤</span>
        <span className="navbar__username">{username}</span>
      </div>
    </header>
  );
}

export default Navbar;
