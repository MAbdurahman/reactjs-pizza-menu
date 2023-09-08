import React from 'react';

export default function Pizza({pizzaObj}) {


    return (
        <>
            <li className="pizza">
                <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
                <div>
                    <h3>{pizzaObj.name}</h3>
                    <p>{pizzaObj.ingredients}</p>
                    <span>${pizzaObj.price}.88</span>
                </div>
            </li>
        </>

    );
};