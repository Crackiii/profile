import NadeemBigImage from '../../images/Naddeem_big.jpg'
import Footer from '../footer/Footer'
import { makeTextBold } from '../profile-summary/ProfileSummary'
import './about.css'

import WorkExperience from './experience/WorkExperience'

const text1 = `
With over **seven years of experience** in **software engineering**, I am dedicated to building **impactful digital solutions** 
that **prioritize user satisfaction** and high-quality performance. My expertise spans across **full-stack development**, 
where I have successfully contributed to projects in diverse sectors including **energy solutions**,  **government services**, 
and  **digital media**.`

const text2 = `Currently, I work as a  **Senior Full Stack Engineer ** at  **Epilot GmbH** in Cologne, Germany, where I 
collaborate closely with **cross-functional teams ** to develop  **end-to-end features ** that enhance product innovation. 
My role involves everything from  **brainstorming ** and  **designing proof-of-concepts ** to developing  **minimum viable products**, 
ensuring that each deliverable aligns with both technical feasibility and **user needs**.`

const text3 = `
As an **AI enthusiast**, I continuously explore new technologies and **integrate advanced tools** into my work. 
My passion for learning is reflected in the **side projects** I undertake, where I delve into AI, machine learning, 
and other cutting-edge fields. I also share my knowledge through **technical blogs**, making complex concepts accessible 
to a broader audience. My technical arsenal includes a vast array of tools and technologies such as **JavaScript**, 
**TypeScript**, **React**, **AWS Serverless**, **Docker**, and many more. Whether it's developing **robust APIs**, **optimizing databases**, 
or **enhancing user interfaces**, I am committed to **delivering solutions** that are both **efficient and user-centric**.`

function About() {
  return (
    <div className="about">
      <div className="profile-summary">
        <div className="profile-image">
          <img alt="Nadeem Ahmad" src={NadeemBigImage} />
        </div>
        <div className="header">
          <h2>Hi there 👋🏻, I’m Nadeem Ahmad</h2>
        </div>
        <div className="profile-details">{makeTextBold(text1)}</div>
        <div className="profile-details">{makeTextBold(text2)}</div>
        <div className="profile-details">{makeTextBold(text3)}</div>

        <WorkExperience />

        <Footer />
      </div>
    </div>
  )
}

export default About
