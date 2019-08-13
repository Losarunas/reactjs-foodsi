import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Navigation extends Component {
    state = {
        burgerMenu: false
    }
    burgerNav = () => {
        this.setState((prevState) => {
            return {
                burgerMenu: !prevState.burgerMenu
            }
        });
    };
    cleanBurger = () => {
        this.setState(() => {
            return {
                burgerMenu: false
            }
        })
    };
    render() {
        let navLinks = 'navigation__all-links';
        let burgerClass = 'navigation__burger';
        if (this.state.burgerMenu) {
            navLinks += ' navigation__all-links--active';
            burgerClass += ' navigation__burger--toggle'
        }

        return (
            <div>
                <div className="navigation">
                    <div className="wrapper">
                        <div className="navigation__items">
                            <div>
                                <span ><Link to="/" className="navigation__logo">FoodSi</Link></span>
                            </div>
                            <nav className="navigation__nav">
                                <ul className={navLinks}>
                                    <li><Link to="/" className="navigation__link" onClick={this.cleanBurger}>Home</Link></li>
                                    <li><NavLink to="/menu" className="navigation__link" onClick={this.cleanBurger}>Menu</NavLink></li>
                                    <li><NavLink to="/about" className="navigation__link" onClick={this.cleanBurger}>About us</NavLink></li>
                                    <li><NavLink to="/contacts/" className="navigation__link" onClick={this.cleanBurger}>Contacts</NavLink></li>
                                </ul>
                                <div className="navigation__social-media">
                                    <a href="https://github.com/Losarunas" className="navigation__facebook-link"><i className="fab fa-facebook-square"></i></a>
                                </div>
                                <div className={burgerClass} onClick={this.burgerNav}>
                                    <div className="navigation__burger--line"></div>
                                    <div className="navigation__burger--line"></div>
                                    <div className="navigation__burger--line"></div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation
