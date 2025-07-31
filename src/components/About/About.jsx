import React from "react";
import './About.css';
import aboutImg from '../../assets/images/img5.jpeg';

const About = () => {
    return(
        <section className="about">
            <div className="left-div">
                <img src={aboutImg} alt="Fashion Model"></img>
            </div>
            <div className="right-div">
                <h2>Beauty that tells a story</h2>
                <p className="bounce">We believe every face holds a story — and every sparkle, every shimmer is a way to tell it louder. Our curated pieces are for those who dare to transform, stand out, and redefine elegance on their terms.</p>
            </div>
        </section>
    );
};

export default About;