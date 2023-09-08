import React from 'react';
import {pizzaData} from './../pizzaData';

export default function Menu() {
    const pizzas = pizzaData;
    console.log(pizzas)

    return (
        <main className="menu">
            <h2>Main Menu</h2>
        </main>

    );
};