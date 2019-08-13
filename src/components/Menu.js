import React, { Component } from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';

export class Menu extends Component {
    render() {
        return (
            <div className="wrapper content">
                <section className="menu">
                    <div className="heading-primary text-center">Menu</div>

                    <div className="menu__cards">
                        <div className="menu__card">
                            <div className="menu__card--image">
                                <img src={img1} alt="Dish 1" />
                                <div className="menu__card--title">
                                    <h2>Some dish Lorem</h2>
                                </div>
                            </div>

                            <div className="menu__card--info">
                                <ul>
                                    <li>New</li>
                                    <li>Soupyas</li>
                                    <li>Tasty</li>
                                    <li>Fishy</li>
                                    <li>Fast</li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu__card">
                            <div className="menu__card--image">
                                <img src={img2} alt="Dish 2" />
                                <div className="menu__card--title">
                                    <h2>Some dish Lorem</h2>
                                </div>
                            </div>
                            <div className="menu__card--info">
                                <ul>
                                    <li>New</li>
                                    <li>Soupyas</li>
                                    <li>Tasty</li>
                                    <li>Fast</li>
                                    <li>Good</li>
                                    <li>Fish</li>
                                    <li>Best</li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu__card">
                            <div className="menu__card--image">
                                <img src={img3} alt="Dish 3" />
                                <div className="menu__card--title">
                                    <h2>Some dish</h2>
                                </div>
                            </div>
                            <div className="menu__card--info">
                                <ul>
                                    <li>New</li>
                                    <li>Soupyas</li>
                                    <li>Tasty</li>

                                </ul>
                            </div>
                        </div>

                        <div className="menu__card">
                            <div className="menu__card--image">
                                <img src={img4} alt="Dish 4" />
                                <div className="menu__card--title">
                                    <h2>Some dish dish</h2>
                                </div>
                            </div>
                            <div className="menu__card--info">
                                <ul>
                                    <li>New</li>
                                    <li>Soupyas</li>
                                    <li>Fast</li>
                                </ul>
                            </div>
                        </div>

                        <div className="menu__card">
                            <div className="menu__card--image">
                                <img src={img5} alt="Dish 5" />
                                <div className="menu__card--title">
                                    <h2>Some dish lorem</h2>
                                </div>
                            </div>
                            <div className="menu__card--info">
                                <ul>
                                    <li>New</li>
                                    <li>Soupyas</li>
                                    <li>Tasty</li>
                                    <li>Fish</li>
                                    <li>Fast</li>
                                </ul>
                            </div>
                        </div>

                        <div className="menu__card">
                            <div className="menu__card--image">
                                <img src={img6} alt="Dish 6" />
                                <div className="menu__card--title">
                                    <h2>Some lorem ipsum</h2>
                                </div>
                            </div>
                            <div className="menu__card--info">
                                <ul>
                                    <li>Fish</li>
                                    <li>Fast</li>
                                </ul>
                            </div>
                        </div>

                        <div className="menu__card">
                            <div className="menu__card--image">
                                <img src={img7} alt="Dish 7" />
                                <div className="menu__card--title">
                                    <h2>Lorem ipsum</h2>
                                </div>
                            </div>
                            <div className="menu__card--info">
                                <ul>
                                    <li>New</li>
                                    <li>Soupyas</li>
                                    <li>Tasty</li>
                                    <li>Fish</li>
                                    <li>Fast</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Menu
