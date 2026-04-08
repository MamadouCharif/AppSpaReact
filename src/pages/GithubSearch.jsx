import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // 🔍

export default function GithubSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Charger quelques utilisateurs par défaut au lancement
  useEffect(() => {
    fetchUsers("M"); // par exemple, tous les utilisateurs contenant "a"
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query) {
        fetchUsers(query);
      } else {
        // Option 1 : réafficher les utilisateurs par défaut
        fetchUsers("M"); 
        // Option 2 : si tu veux garder la liste vide par défaut, laisse setUsers([])
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  const fetchUsers = async (search) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.github.com/search/users?q=${search}`
      );

      setUsers(res.data.items);
    } catch (err) {
      setError("Erreur lors de la récupération des données");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px",   alignItems: "center" }}>
      <h2   style={{color: "#2D5BE3"}}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: "10px", color: "#111", fontSize: "15px" }} />
        Recherchez sur GitHub
      </h2>      
      <input
        type="text"
        placeholder="Rechercher un utilisateur..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form__input"
        style={{ padding: "12px", width: "100%", marginBottom: "20px" }}
      />

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.length === 0 && !loading && <p>Aucun résultat trouvé</p>}

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
            background: "#FFFFFF",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            width="50"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <div>
            <p>{user.login}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2ecc71" }}
            >
              Voir profil
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}