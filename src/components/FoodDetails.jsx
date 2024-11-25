import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/foods/${id}`)
      .then(response => response.json())
      .then(data => setFood(data))
      .catch(error => console.error("Erro ao carregar os detalhes da comida:", error));
  }, [id]);

  if (!food) return <p>Carregando...</p>;

  return (
    <div className="container">
      <img src={food.image} alt={food.name} />
      <h1>{food.name}</h1>
      <p>{food.description}</p>
      <p><b>Preço:</b> R$ {food.price.toFixed(2)}</p>
      <p><b>Tempo de preparo:</b> {food.time} minutos</p>
      <p><b>Taxa de entrega:</b> R$ {food.delivery.toFixed(2)}</p>
      <p><b>Avaliação:</b> {food.rating.toFixed(1)}</p>
    </div>
  );
};

export default FoodDetails;
