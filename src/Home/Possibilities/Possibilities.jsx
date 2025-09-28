import React from 'react'
import './Possibilities.css'
import Button from '../../ReusableComponents/ReusableButton'
const services = [
  {
    id: 1,
    title: "Generative AI",
    description: "Generative AI creates new content from data.",
    image: "item1.png",
    className: "item1",
  },
  {
    id: 2,
    title: "Computer Vision",
    description: "Computer Vision enables machines to understand and interpret visual data.",
    image: "item2.png",
    className: "item2",
    gridSpan: "2 / span 2",
  },
  {
    id: 3,
    title: "LLMs & Agentic AI",
    description: "LLMs & Agentic AI power intelligent reasoning and autonomous decision-making.",
    image: "item3.png",
    className: "item3",
    gridSpan: "1 / span 2",
  },
  {
    id: 4,
    title: "Machine Learning & Predictive Analytics",
    description: "Machine Learning & Predictive Analytics predict future trends.",
    image: "item4.png",
    className: "item4",
  },
  {
    id: 5,
    title: "MLOps, Serverless & Scalable",
    description: "MLOps, Serverless & Scalable ensure efficient, flexible AI deployment.",
    image: "item5.png",
    className: "item5",
    gridSpan: "1 / span 3",
  },
]

function Possibilities() {
  return (
    <div className='possibilities'>
      <h3 className="subtitle">Services</h3>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2 className="heading2">Redefine what's possible with AI</h2>
        <Button label="Start a Project →"/>
      </div>

      <div className="grid-container">
        {services.map(service => (
          <div
            key={service.id}
            className={service.className}
            style={{
              background: `url(${require(`../../assets/${service.image}`)}) center/cover no-repeat`,
              gridColumn: service.gridSpan || "auto"
            }}
          >
            <div className="icon-circle"></div>
            <div className="content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Possibilities
