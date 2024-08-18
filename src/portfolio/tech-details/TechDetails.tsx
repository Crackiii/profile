import { techs } from './techs'
import './tech-details.css'

function TechDetails() {
  return (
    <div className="tech-details">
      <h2>💻 Techs & Tools I use</h2>

      <div className="images-container">
        {techs.map((tech, index) => (
          <div key={index}>
            <div className="tech-img">
              <img alt={tech.name} src={tech.image} />
            </div>
            <div className="text">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechDetails
