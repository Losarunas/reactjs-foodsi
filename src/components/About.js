import React, { Component } from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/about1.jpg';
import img10 from '../images/about2.jpg';
import img11 from '../images/about3.jpg';

export class About extends Component {
    render() {
        return (
            <div className="wrapper content">
                <section className="about">
                    <div className="heading-primary text-center">About us</div>
                    <div className="about__text">
                        <p>Ut sollicitudin vitae sem non eleifend. Nulla vel cursus leo. Quisque venenatis in urna vitae vehicula. Praesent nunc augue, mollis non viverra nec, sollicitudin ac mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam venenatis dui ut metus placerat, venenatis volutpat purus varius.</p>
                    </div>
                    <div className="about__gallery">
                        <figure className="about__gallery__item--1"><img src={img1} alt="Gallery 1" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--2"><img src={img2} alt="Gallery 2" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--3"><img src={img3} alt="Gallery 3" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--4"><img src={img4} alt="Gallery 4" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--5"><img src={img5} alt="Gallery 5" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--6"><img src={img6} alt="Gallery 6" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--7"><img src={img7} alt="Gallery 7" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--8"><img src={img8} alt="Gallery 8" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--9"><img src={img9} alt="Gallery 9" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--10"><img src={img10} alt="Gallery 10" className="about__gallery__img" /></figure>
                        <figure className="about__gallery__item--11"><img src={img11} alt="Gallery 11" className="about__gallery__img" /></figure>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
