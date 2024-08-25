import './experience-item.css'

interface Props {
  company: string
  companyLink: string
  location: string
  position: string
  date: string
  description: string
  companyImage: string
  technologies: string[]
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
      </div>
      <div className="location-wrapper">
        <div className="company-location">
          {props.location} - <small>{props.date}</small>
        </div>
        <div className="company-link">
          <a href={props.companyLink} rel="noreferrer" target="_blank">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="my-details">
        <h3 className="position">{props.position}</h3>
      </div>
      <div className="description">{props.description}</div>
      <div className="technologies">
        <div className="tags">
          {props.technologies.map((technology, index) => (
            <div className="tag" key={index}>
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
