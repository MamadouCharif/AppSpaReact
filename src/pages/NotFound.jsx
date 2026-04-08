

import { useLocation, useNavigate, Link } from "react-router-dom";

function NotFound() {
  // useLocation retourne l'objet location courant
  // On s'en sert pour afficher l'URL qui a causé la 404
  const location = useLocation();

  // useNavigate permet de naviguer par code (ex: retour en arrière)
  const navigate = useNavigate();

  return (
    <div className="page page--notfound">
      {/* Code d'erreur visuel */}
      <div className="notfound__code" aria-hidden="true">404</div>

      <div className="page__hero">
        <p className="page__tag">Page introuvable</p>
        <h1 className="page__title">Oups ! Cette page<br />n'existe pas.</h1>
        <p className="page__subtitle">
          L'URL <code className="notfound__url">{location.pathname}</code> ne
          correspond à aucune route définie dans l'application.
        </p>
      </div>

      {/* Actions de récupération */}
      <div className="page__actions">
        {/* navigate(-1) : retour à la page précédente dans l'historique */}
        <button
          className="btn btn--outline"
          onClick={() => navigate(-1)}
        >
          ← Page précédente
        </button>

        {/* Retour à l'accueil via <Link> */}
        <Link to="/" className="btn btn--primary">
          Retour à l'accueil
        </Link>
      </div>

      {/* Petite note pédagogique */}
      <p className="notfound__hint">
        💡 Cette page est gérée par la route <code>path="*"</code> dans{" "}
        <code>App.jsx</code>.
      </p>
    </div>
  );
}

export default NotFound;
