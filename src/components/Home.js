import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="home__main">
                <div className="home__text">
                    <span className="home__text--welcome">Welcome to </span>
                    <h1 className="home__text--brand">FoodSi</h1>
                </div>
                <div className="home__buttons">
                    <NavLink to="/menu" className="btn btn--primary">Menu</NavLink>
                    <NavLink to="/about" className="btn btn--secondary">About us</NavLink>
                </div>

            </div>
        </div>
    )
}

export default Home
