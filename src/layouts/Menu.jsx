import React from 'react';
import Pizza from './../components/Pizza';
import {pizzaData} from './../pizzaData';

export default function Menu() {
    const pizzas = pizzaData;


    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                {pizzas.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>

    );
};