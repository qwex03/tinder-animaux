import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../composant/Form'; 
import Logo from '../composant/Logo';

const Register = () => {
  const [message] = useState("");
  let navigate = useNavigate();

  const fields = [
    {
      name: "name",
      label: "Nom",
      type: "text",
      placeholder: "Nom",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      label: "Mot de passe",
      type: "password",
      placeholder: "Mot de passe",
    },
    {
      name: "tel",
      label: "téléphone",
      type: "tel",
      placeholder: "06 00 00 00 00"
    }
  ];

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email: data.email,
        password: data.password,
        name: data.name,
        tel: data.tel
      });

      localStorage.setItem("token", res.data.token);
      navigate("/choix");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    }
  };

  return (
    <div>
      <Logo />
      <h2>Inscription</h2>
      {message && <p>{message}</p>}
      <Form 
        fields={fields} 
        onSubmit={handleSubmit} 
        submitUrl={null} 
      />
    </div>
  );
};

export default Register;
