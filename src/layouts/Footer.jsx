import React from 'react';
import Order from './../components/Order';

export default function Footer() {

    const hour = new Date().getHours();
    const openHour = 11;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>

    );
};