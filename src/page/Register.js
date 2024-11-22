import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
        name,
      });
      localStorage.setItem("token", res.data.token); // Sauvegarder le jeton JWT
      setMessage("Inscription réussie !");
    } catch (error) {
      setMessage("Erreur lors de l’inscription.");
    }
  };
  return (
    <div>
      <h2>Inscription</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Nom"
            name="nom"
            id="nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label for="nom" className="form__label">Nom</label>
        </div>
        <div className="form__group field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label for="email" className="form__label">Email</label>
        </div>
        <div className="form__group field">
          <input
            type="password"
            placeholder="Mot de passe"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label for="pass" className="form__label">Mot de passe</label>
        </div>
        <button className="NavButton" type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
