import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from "../composant/AnimalCard";
const ListAnimals = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/animals")
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the animals!", error);
      });
  }, []);

  const handleSwipe = (direction, name) => {
    console.log('You swiped' + direction + 'on' + name)
  }

  return (
    <div className="animal-list">
      {animals.map((animal) => (
        <AnimalCard key={animal._id} {...animal} onSwipe={(dir) => handleSwipe(dir, animal.name)} />
      ))}
    </div>
  );
};
export default ListAnimals;
