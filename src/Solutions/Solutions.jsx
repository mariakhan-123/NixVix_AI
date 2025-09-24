import React from 'react'
import solutionImg from '../assets/solutionImg.png'
import Contact from '../Contact/Contact'
import Impact from '../Home/Impact/Impact'
import Partners from '../Common/Partners/Partners'
import SolutionCard from './SolutionCard/SolutionCard'
import Button from '../ReusableComponents/ReusableButton'

function Solutions() {
    return (
        <div>
            <section className="main-container" style={{ backgroundImage: `url(${solutionImg})` }}>
                <div className="overlay">
                    <h2 className="heading1"style={{marginTop:"100px"}}>AI Solutions</h2>
                    <p className="services-subtitle">
                        Solutions We Deliver
                    </p>

                    <div className="services-buttons">
                        <Button label="Pose Estimation" shadow={true} />
                        <Button label="Computer Vision" shadow={true} />
                        <Button label="Voice Tech" shadow={true} />
                        <Button label="AI Video Gen" shadow={true} />
                        <Button label="Conversation AI" shadow={true} />
                        <Button label=" AI Understandng" shadow={true} />
                        <Button label="Agent Workflows" shadow={true} />
                    </div>
                </div>

            </section>
            <SolutionCard />
            <Partners />
            <Impact />
            <Contact />
        </div>


    )
}

export default Solutions
