import React from 'react';
import { Link } from 'react-router-dom';

function Meal({ strMeal: name, idMeal: id, strMealThumb: image }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${id}`} className="btn right">
                    Watch
                </Link>
            </div>
        </div>
    );
}

export { Meal };
