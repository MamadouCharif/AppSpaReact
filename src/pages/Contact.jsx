import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  // Lecture du username pour pré-remplir le champ nom
  const { username } = useContext(AppContext);

  //  State du formulaire (objet unique pour tous les champs) ─
  const [form, setForm] = useState({
    name:    username !== "Visiteur" ? username : "",
    email:   "",
    message: "",
  });

  // State pour afficher le feedback de succès
  const [submitted, setSubmitted] = useState(false);
  // State pour les erreurs de validation
  const [errors, setErrors] = useState({});

  // Mise à jour générique d'un champ
  // Une seule fonction gère tous les inputs grâce à `name`
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Efface l'erreur du champ dès que l'utilisateur tape
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  //  Validation 
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim())    newErrors.name    = "Le nom est requis.";
    if (!form.email.trim())   newErrors.email   = "L'email est requis.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
                              newErrors.email   = "Format d'email invalide.";
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    return newErrors;
  };

  //  Soumission 
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      // Des erreurs existent → on les affiche et on arrête
      setErrors(validationErrors);
      return;
    }

    // Pas d'erreur → simulation d'envoi
    console.log("Formulaire soumis :", form);
    setSubmitted(true);
  };

  //  Affichage après succès 
  if (submitted) {
    return (
      <div className="page page--contact">
        <div className="page__hero">
          <p className="page__tag">Message envoyé !</p>
          <h1 className="page__title">Merci, {form.name}</h1>
          <p className="page__subtitle">
            Votre message a bien été reçu
          </p>
        </div>
        <div className="page__actions">
          <Link to="/"   className="btn btn--primary">← Retour à l'accueil</Link>
          <button
            className="btn btn--outline"
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  //  Affichage normal du formulaire 
  return (
    <div className="page page--contact">
      <div className="page__hero">
        <p className="page__tag" style={{color: "orange"}}>Nous contacter</p>
        <h1 className="page__title" style={{color: "#2D5BE3"}}>Envoyez‑nous<br />un message</h1>
        <p className="page__tag" style={{color: "orange"}}> <strong style={{color: "black"}}>Avez-vous un projet en tête ? <br /></strong>Discutons de votre projet</p>
        <p className="page__subtitle">
          Disponible pour des projets freelance, stages ou collaborations.
        </p>
      </div>

      <section className="card">
        <form className="form form--contact" onSubmit={handleSubmit} noValidate>

          {/* Champ Nom */}
          <div className="form__group">
            <label className="form__label" htmlFor="name">Nom</label>
            <input
              className={`form__input ${errors.name ? "form__input--error" : ""}`}
              id="name"
              type="text"
              name="name"          // Doit correspondre à la clé dans le state `form`
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom complet"
            />
            {/* Affichage conditionnel de l'erreur */}
            {errors.name && <span className="form__error">{errors.name}</span>}
          </div>

          {/* Champ Email */}
          <div className="form__group">
            <label className="form__label" htmlFor="email">Email</label>
            <input
              className={`form__input ${errors.email ? "form__input--error" : ""}`}
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="vous@exemple.com"
            />
            {errors.email && <span className="form__error">{errors.email}</span>}
          </div>

          {/* Champ Message */}
          <div className="form__group">
            <label className="form__label" htmlFor="message">Message</label>
            <textarea
              className={`form__input form__textarea ${errors.message ? "form__input--error" : ""}`}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message…"
              rows={5}
            />
            {errors.message && <span className="form__error">{errors.message}</span>}
          </div>

          <button className="btn btn--primary" type="submit">
            Envoyer le message <FontAwesomeIcon icon={faEnvelopeOpen} />
          </button>
        </form>
      </section>

      <div className="page__actions">
        <Link to="/about" className="btn btn--outline">← À propos</Link>
        <Link to="/"      className="btn btn--outline">Accueil</Link>
      </div>
    </div>
  );
}

export default Contact;
