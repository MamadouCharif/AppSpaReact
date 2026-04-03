import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

function About() {
  // Lecture seule du contexte — on n'utilise pas setUsername ici
  const { username } = useContext(AppContext);

  return (
    <div className="page page--about">
      {/* En-tête */}
      <div className="page__hero">
        <p className="page__tag">À propos de nous</p>
        <h1 className="page__title" style={{color: "#2D5BE3"}}>Massab  Digital</h1>
        <p className="page__subtitle">
          Bonjour <strong>{username}</strong> — voici les projets
          réalisés au sein de notre entreprise.
        </p>
      </div>

      <section className="card">
          <div className="about-spac" style={{display: "flex", gap: "30px"}}>
            <div >
              <img src="src/assets/img/profil1.jpeg" alt="" style={{width: "200px"}} />
            </div>

            <div>
            <h1 className="page__title" style={{ color: "#FF8C00", fontSize: "2rem" }}>À propos de nous</h1>
            <p>
              <strong>Massab Digital</strong> est une entreprise créative qui
              évolue dans le web, UX/UI, App Mobille, et le Design graphique.
              Affiches | Logos | Sites web | Applications mobiles | Vidéos
              professionnelles Boostez votre image avec nous !
            </p>
            <div class="about-stats reveal active">
              <div>
                <h3>10+</h3>
                <p>Projets réalisés</p>
              </div>
              <div>
                <h3>2+</h3>
                <p>Expérience académique</p>
              </div>
              <div>
                <h3>100%</h3>
                <p>Engagement</p>
              </div>
            </div>
            </div>
          </div>
      </section>


      {/* Navigation */}
      <div className="page__actions">
        <Link to="/"        className="btn btn--outline">← Accueil</Link>
        <Link to="/contact" className="btn btn--primary">Contact →</Link>
      </div>
    </div>
  );
}

export default About;
