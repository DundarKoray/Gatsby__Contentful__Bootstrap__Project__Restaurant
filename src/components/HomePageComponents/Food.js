import React from 'react';
import Img from 'gatsby-image'
import './food.css'

const Food = ({ food }) => {
    // console.log(food)
    const { dishName, price, description } = food
    const { fixed } = food.image
    return (
        <div className="food-wrapper">
            <Img fixed={fixed} className="food-image" />
            <div className="food-text">
                <div className="food-content">
                    <h3 className="food-name">{dishName}</h3>
                    <h3 className="food-price">{price}</h3>
                </div>
                <p className="food-description">{description}</p>
            </div>
        </div>
    );
};

export default Food;