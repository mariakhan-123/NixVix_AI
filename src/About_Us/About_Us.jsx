import React from 'react'
import "./About_Us.css";
import Button from '../ReusableComponents/ReusableButton';
import { Link } from 'react-router-dom';

function About_Us() {
    return (
        <div>
            <section className="about-section">
                <div className="about-container">
                    <h3 className="subtitle">About Us</h3>
                    <h2 className='about-heading'>
                        Pioneering AI That Thinks Beyond Code
                    </h2>
                    <p className="about-description">
                       We help businesses identify opportunities and transform them into reality through  generative, cognitive, and applied AI. Leveraging foundation models, machine  learning, and multi-agent intelligence, we co-create with domain experts,  researchers, and stakeholders across every stage of product development —  ensuring solutions that are explainable, scalable, and production-ready.
                    </p>
                    <Link to="/contact-us">
                    <Button label="Start a Project →" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About_Us
