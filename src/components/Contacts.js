import React, { Component } from 'react';
export class Contacts extends Component {
    render() {
        return (
            <div className="wrapper content">
                <section className="contacts">
                    <div className="heading-primary text-center">Contacts</div>
                    <div className="contacts__info">
                        <ul>
                            <li>Phone: <span className="contacts__info--details">+370698989898</span></li>
                            <li>E-mail: <span className="contacts__info--details">losa@gmail.com</span></li>
                            <li>Facebook: <span className="contacts__info--details"><a href="https://github.com/Losarunas" className="link">Click here</a></span></li>
                            <li>Github: <span className="contacts__info--details"><a href="https://github.com/Losarunas" className="link">Click here</a></span></li>
                            <li>Work hours: <span className="contacts__info--details">I-IV: 10-22, V-VI: 10-24, VII: 10:23</span></li>
                            <li>Location: <span className="contacts__info--details">Vilnius</span></li>
                        </ul>
                        <div className="contacts__info--map">
                            <iframe src="https://www.google.com/maps?q=kudirkos+50+vilnius&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="GoogleMaps">
                            </iframe>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contacts
