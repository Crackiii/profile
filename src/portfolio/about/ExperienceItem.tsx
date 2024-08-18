import './experience-item.css'

interface Props {
  company: string
  companyLink: string
  location: string
  position: string
  date: string
  description: string
  companyImage: string
}

function ExperienceItem(props: Props) {
  return (
    <div className="experience-item">
      <div className="header">
        <div className="company-image">
          <img alt="Company" src={props.companyImage} />
        </div>
        <div className="company-name">
          <h2>{props.company}</h2>
        </div>
        <div className="company-location">{props.location}</div>
        <div className="company-link">
          <a href={props.companyLink} rel="noreferrer" target="_blank">
            ⤴
          </a>
        </div>
      </div>
      <div className="my-details">
        <div className="position">{props.position}</div>
        <div className="date"> - ({props.date})</div>
      </div>
      <div className="description">{props.description}</div>
    </div>
  )
}

export default ExperienceItem
