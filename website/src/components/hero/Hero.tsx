import React, { Component } from 'react';
import './Hero.scss';

class HeroImage extends Component {
    props: any;
    render() {
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImage