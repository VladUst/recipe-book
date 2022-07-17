import React from 'react';
import { Link } from 'react-router-dom';
function CategoryItem({
    strCategory: categoryName,
    strCategoryThumb: image,
    strCategoryDescription: description,
}) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={categoryName} />
            </div>
            <div className="card-content">
                <span className="card-title">{categoryName}</span>
                <p>{description.slice(0, 100)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${categoryName}`} className="btn right">
                    Watch
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };
