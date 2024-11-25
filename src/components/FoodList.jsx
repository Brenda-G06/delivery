import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/foods")
      .then(response => response.json())
      .then(data => setFoods(data.slice(0, 6)))
      .catch(error => console.error("Erro ao carregar comidas:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Comidas</h1>
      <div className="row">
        {foods.map(food => (
          <div key={food.id} className="col-lg-4 col-md-6 col-12 mb-3">
            <div className="card card-estilo">
              <img src={food.image} className="card-img-top" alt="Foto da comida" />
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.description}</p>
                <p><b>R$ {food.price.toFixed(2)}</b></p>
                <Link to={`/comidas/${food.id}`} className="btn btn-success">
                  Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
