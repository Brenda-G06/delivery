import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Importação do arquivo CSS

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Erro ao carregar restaurantes:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center title">Lista de Restaurantes</h1>
      <div className="row">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="col-lg-4 col-md-6 col-12 mb-3">
            <Link
              to={`/restaurantes/${restaurant.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card card-estilo h-100">
                <img
                  src={restaurant.image}
                  className="card-img-top img-resized"
                  alt={restaurant.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">{restaurant.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Avaliação:</b> {restaurant.rating}
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
