import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const { username, setUsername } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(username);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page (comportement HTML natif)

    if (inputValue.trim()) {
      setUsername(inputValue.trim()); // Met à jour le contexte global
    }
  };

  return (
    <div className="page page--home">
      {/* En-tête de la page */}
      <div className="page__hero">
        <p className="page__tag">Massab Digital</p>
        <h1 className="page__title" style={{ color: "#FF8C00", fontSize: "2rem" }}>
          Bonjour,<br />
          <em>{username}</em> <FontAwesomeIcon icon={faHand} style={{ color: "#FF8C00", fontSize: "2rem" }} />
        </h1>
        <p className="page__subtitle">
          Boostez votre image digitale, Web • App Mobille • UX/UI Nous créons des expériences modernes pour votre business.

        </p>
      </div>

          {/* Démontre la connexion entre un input React et le contexte global  */}
      <section className="card">
        <h2 className="card__title">  <FontAwesomeIcon icon={faPen} style={{color: "blue"}} />  Modifier votre nom</h2>
        <p className="card__desc">
          Ce champ utilise le contexte global React. La valeur sera
          visible dans la barre de navigation et sur toutes les pages.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Mise à jour du state local à chaque frappe
            placeholder="Entrez votre nom…"
            maxLength={30}
          />
          <button className="btn btn--primary" type="submit">
            Mettre à jour
          </button>
        </form>
      </section>

      <section className="features">
        <div className="feature-card">
          <span className="feature-card__icon">
            <FontAwesomeIcon icon={faBook} style={{ fontSize: "3rem", color: "green" }} />
          </span>
            <h3>Application scolaire</h3>
          <p>Application web de gestion scolaire (collège → lycée). <br />
            <code>#Angular #JS #HTML</code> et <code>#CSS #Bootstrap...</code>
          </p>
        </div>
        <div className="feature-card">
          <span className="feature-card__icon">
            <FontAwesomeIcon icon={faXmark} style={{ marginRight: "5px", color: "red", fontSize: "3rem" }} />
          </span>
          <h3>Jeu Morpion</h3>
          <p>Jeu interactif en JavaScript avec logique de victoire. <code>#JavaScript</code> et <code>#TypeScript</code>.</p>
        </div>
        <div className="feature-card">
          <span className="feature-card__icon">
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "3rem", color: "yellow" }}/>
          </span>
          <h3>Site ONG VicePE</h3>
          <p>Site vitrine responsive pour ONG. <br />
            <code>#JS #HTML</code> et <code>#CSS #Bootstrap...</code>
          </p>
        </div>
      </section>

      {/* Liens rapides vers les autres pages */}
      <div className="page__actions">
        <Link to="/about"   className="btn btn--outline">Découvrir À propos →</Link>
        <Link to="/contact" className="btn btn--outline">Aller au Contact →</Link>
      </div>
    </div>
  );
}

export default Home;
