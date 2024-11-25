import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/restaurants/${id}`)
      .then(response => response.json())
      .then(data => setRestaurant(data))
      .catch(error => console.error("Erro ao carregar detalhes do restaurante:", error));
  }, [id]);

  if (!restaurant) return <p>Carregando...</p>;

  return (
    <div className="container">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <ul>
        <li><b>Avaliação:</b> {restaurant.rating}</li>
      </ul>
    </div>
  );
};

export default RestaurantDetails;
