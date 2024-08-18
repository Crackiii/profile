import React from 'react'
import { useNavigate } from 'react-router-dom'

import NadeemImage from '../../images/Nadeem-round.png'

import './profile-summary.css'

export function makeTextBold(input: string): JSX.Element {
  // Remove any excessive whitespace and split by **
  const cleanedInput = input.replace(/\s+/g, ' ')
  const parts = cleanedInput.split(/(\*\*.*?\*\*)/g)

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>
        } else {
          return <React.Fragment key={index}>{part}</React.Fragment>
        }
      })}
    </span>
  )
}

function ProfileSummary() {
  const navigate = useNavigate()

  const text = `
    I am a dedicated **Software Engineer** with over **7 years of experience** 
    passionate about **creating impactful products** that users love. As an **AI enthusiast**, 
    I am always eager to **learn new technologies and tools**, and I enjoy diving into **side 
    projects** to explore innovative ideas. I prioritize **customer satisfaction**, 
    focusing on **rigorous testing**, accessibility, effective **teamwork**, and maintaining 
    high **code quality** to ensure optimal user experiences.`

  const handleCVDownload = () => {
    // Create an anchor element
    window.open(`../../Nadeem_CV.pdf`, '_blank')
  }

  return (
    <div className="profile-summary">
      <div className="profile-image">
        <img alt="Nadeem Ahmad" src={NadeemImage} />
      </div>
      <div className="header">
        <h2>Hi there 👋🏻, I’m Nadeem Ahmad</h2>
      </div>
      <div className="profile-details">{makeTextBold(text)}</div>
      <div className="buttons">
        <button onClick={() => navigate('/about')}>Read more about me →</button>
        <button onClick={handleCVDownload}>View my CV ↑</button>
      </div>
    </div>
  )
}

export default ProfileSummary
