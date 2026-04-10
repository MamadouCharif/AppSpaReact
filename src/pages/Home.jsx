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
    <section className="w-full relative overflow-hidden rounded-b-[40px] bg-gradient-to-r from-[#2D5BE3] to-[#FF8C00] text-white pb-20">

  <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-10 items-centers">

    {/* LEFT */}
    <div>
      <p className="text-sm uppercase tracking-widest text-[#FF8C00] mb-4">
        Bienvenu chez Massab Digital
      </p>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Nous aidons les entreprises à résoudre  <br />
        leurs problèmes grâce à la <br />
        <span className="text-[#FF8C00]">technologie.</span>
      </h1>

      <p className="mt-6 text-gray-200 max-w-md">
        Boostez votre image digitale Web • Mobile • UX/UI.
        Nous créons des expériences modernes pour votre business.
      </p>

      <div className="mt-8 flex  gap-4">
        <Link
          to="/contact"
          className="bg-[#FF8C00] text-[#ffff]  text-sm px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          
        >
          Contactez-nous
        </Link>

        <Link
          to="/about"
          className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#2D5BE3] transition"
        >
          Apropos de nous
        </Link>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative hidden md:block">
      <img
        src="src/assets/img/profil1.jpeg" 
        alt="hero"
        className="relative z-10 w-full rounded-xl"
      />

      {/* Shapes */}
      <div className="absolute top-10 right-10 w-32 h-6 bg-white/20 rounded-full"></div>
      <div className="absolute top-24 right-0 w-20 h-4 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-40 h-6 bg-white/20 rounded-full"></div>
    </div>

  </div>

  {/* ✅ CARDS (corrigées sans absolute) */}
  <div className="max-w-6xl mx-auto px-6 mt-10">
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white text-black p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
        <h3 className="font-bold text-[#2D5BE3]">Sites Web & App Mobille</h3>
        <p className="text-sm text-gray-600 mt-2">
          Création de sites modernes, rapides et entièrement responsive.
        </p>
      </div>

      <div className="bg-white text-black p-6 rounded-xl shadow-2xl text-center  border-2 border-[#FF8C00] hover:scale-105 transition">
        <h3 className="font-bold text-[#2D5BE3]">UI/UX Design</h3>
        <p className="text-sm text-gray-600 mt-2">
          Conception d’interfaces intuitives, esthétiques et centrées utilisateur.
        </p>
      </div>

      <div className="bg-white text-black p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
        <h3 className="font-bold text-[#2D5BE3]">Design Graphique</h3>
        <p className="text-sm text-gray-600 mt-2">
          Création de logos, affiches et identité visuelle pour votre marque.
        </p>
      </div>

    </div>
  </div>

</section>
  );
}

export default Home;
