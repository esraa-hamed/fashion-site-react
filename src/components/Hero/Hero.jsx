import React from "react";
import './Hero.css';
import heroImg from '../../assets/images/img12.jpeg';

const Hero = () => {
    return(
        <section className="hero">
            <div className="left-div">
                <h1 className="bounce">Metamorphosis in Style</h1>
                <p className="shiny-text">From subtle to stunning — transform your look with our signature pieces.</p>
                <button>Explore Collection</button>
            </div>
            <div className="right-div"> 
                <img src={heroImg} alt="Fashion model"></img>
            </div>
        </section>
    );
};

export default Hero;