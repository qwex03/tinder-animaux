import React from "react";
import axios from "axios";
import Logo from "../composant/Logo";
import Form from "../composant/Form";

const Login = () => {
  const handleSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Connexion réussie !");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    }
  };

  const fields = [
    { name: "email", type: "email", label: "Email", placeholder: "Entrez votre email", titre: "" },
    { name: "password", type: "password", label: "Mot de passe", placeholder: "Entrez votre mot de passe", titre: "" },
  ];

  return (
    <div className="container">
      <Logo />
      <h2>Connexion</h2>
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        submitUrl={null} 
      />
    </div>
  );
};

export default Login;
