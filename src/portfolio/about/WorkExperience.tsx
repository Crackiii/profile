import Dinkum from '../../images/work/dinkum.png'
import Epilot from '../../images/work/epilot.png'
import Eziline from '../../images/work/exiline.png'
import IBM from '../../images/work/ibm.jpg'
import Teknords from '../../images/work/teknords.png'
import Triumpho from '../../images/work/triupho.jpg'
import Vidy from '../../images/work/vidy2.png'

import ExperienceItem from './ExperienceItem'
import './work-experience.css'

const experience = [
  {
    company: 'Triumpho',
    companyImage: Triumpho,
    companyLink: '',
    location: 'Cologne, Germany',
    position: 'Founder',
    date: 'July 2022 - Present',
    description: 'More details to be added',
    technologies: [
      'TypeScript',
      'React Native',
      'Material UI',
      'Zustand',
      'React Query',
      'AWS Serverless',
      'Node JS',
      'Open API',
      'Docker',
      'Github',
      'Github Actions'
    ]
  },
  {
    company: 'Epilot GmbH',
    companyImage: Epilot,
    companyLink: 'https://www.epilot.cloud',
    location: 'Cologne, Germany',
    position: 'Senior full stack engineer',
    date: 'Feb 2021 - Present',
    description: `At Epilot GmbH, a leading cloud-based software provider for energy solutions, I work as a Senior Full Stack Engineer. My responsibilities include collaborating with product managers, designers, and other engineers to develop end-to-end features that meet both user needs and technical requirements. I actively contribute to brainstorming sessions, authoring Request for Comments (RFCs), and creating Proof of Concepts (POCs) to validate new ideas. My role involves building Minimum Viable Products (MVPs) and Minimum Lovable Products (MLPs), prioritizing high standards of code quality, and ensuring robust unit and end-to-end testing. My work has consistently contributed to the product's excellence, enhancing user satisfaction and driving innovation.`,
    technologies: [
      'JavaScript',
      'TypeScript',
      'React JS',
      'Storybook',
      'Material UI',
      'Redux',
      'React Query',
      'AWS Serverless',
      'ElasticSearch',
      'Kibana',
      'Logstash',
      'Node JS',
      'Open API',
      'OpenAPI clients',
      'Hasura',
      'GraphQL',
      'Docker',
      'Postgres',
      'Styled Components',
      'SCSS',
      'Gitlab',
      'CI/CD',
      'JIRA',
      'Confluence',
      'Miro',
      'MS Teams',
      'Slack',
      'Tuple'
    ]
  },
  {
    company: 'Vidy',
    companyImage: Vidy,
    companyLink: 'https://www.vidy.com',
    location: 'New York, US (Remote)',
    position: 'Product Engineer',
    date: 'Aug 2020 — Jan 2021',
    description: `At Vidy, a company specializing in embedding videos behind web text through NLP, I served as a Product Engineer. My primary focus was understanding features from the user’s perspective and translating those insights into the design and development of the platform. I refactored the existing codebase to Svelte, significantly improving developer experience. Additionally, I was responsible for market analysis, identifying customer needs, and engineering a fine-grained reactive framework for the vanilla JavaScript codebase. This work supported a product with 14 million unique monthly visitors.`,
    technologies: [
      'Svelte (TS)',
      'JavaScript',
      'React JS',
      'Node JS',
      'TypeScript',
      'SCSS',
      'JSX',
      'CSS Modules',
      'GitHub',
      'Slack'
    ]
  },
  {
    company: 'IBM',
    companyImage: IBM,
    companyLink: 'https://www.ibm.com',
    location: ' Abu Dhabi, UAE',
    position: 'Senior Full Stack Developer',
    date: 'Nov 2019 — May 2020',
    description: `At IBM, I worked as a Full Stack Engineer on the TAMM project, a government services portal in Abu Dhabi. My role involved front-end development using React, with a focus on creating a user interface that supported both Arabic and English localizations. I collaborated with DevOps, VAPT, QA teams, and fellow engineers to develop a seamless user experience. I also contributed to backend development by building robust APIs and implementing business logic with Node.js. Additionally, I played a key role in mentoring junior engineers and ensured the product met customer expectations.`,
    technologies: [
      'React',
      'Redux',
      'Node',
      'Express',
      'TypeScript',
      'Elastic Search',
      'SonarQube',
      'Jest',
      'Docker',
      'Gitlab',
      'Gitlab Pipelines',
      'Jira',
      'Confluence',
      'Microservice Architecture',
      'Swagger',
      'Postman',
      'Slack'
    ]
  },
  {
    company: 'Eziline',
    companyImage: Eziline,
    companyLink:
      'https://www.linkedin.com/company/eziline/?originalSubdomain=pk',
    location: 'Islamabad, Pakistan',
    position: 'Senior Full Stack Software Engineer',
    date: 'Jul 2018 — Sep 2019',
    description: `At Eziline, a digital services company, I served as a Senior Full Stack Developer. My responsibilities included designing and optimizing databases, developing dynamic web platforms using JavaScript, Angular, PHP, and Laravel, and ensuring seamless integration between front-end and back-end components. I implemented responsive design principles and conducted code reviews to maintain high standards. My efforts led to the successful and timely delivery of projects that consistently met or exceeded client expectations.`,
    technologies: [
      'JavaScript',
      'Angular',
      'Ngrx',
      'PHP',
      'Laravel',
      'MySQL',
      'Swagger',
      'Postgres',
      'GitHub',
      'HTML5',
      'CSS3',
      'Browser plugins'
    ]
  },
  {
    company: 'Dinkum',
    companyImage: Dinkum,
    companyLink:
      'https://www.linkedin.com/company/dcsswat/?originalSubdomain=pk',
    location: 'Swat, Pakistan',
    position: 'Front End Engineer',
    date: 'Nov 2016 — Apr 2018',
    description: `At Dinkum, I worked as a Front End Engineer on transforming an aging application from classic ASP to a modern single-page application using Angular JS. I was involved in developing the architecture of the new application, creating components like notifications, AJAX calls, and drag-and-drop elements. Additionally, I provided hands-on training to new engineers on single-page application (SPA) development.`,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'Angular JS',
      'Bootstrap',
      'Django',
      'PHP',
      'MySQL',
      'MongoDB'
    ]
  },
  {
    company: 'Teknords',
    companyImage: Teknords,
    companyLink:
      'https://www.linkedin.com/company/teknords/?originalSubdomain=pk',
    location: 'Swat, Pakistan',
    position: 'Full Stack Developer',
    date: 'Mar 2014 — Apr 2016',
    description: `Starting as an intern and transitioning to a Full Stack Developer at Teknords, I was involved in a variety of tasks including project planning, task assignments, code testing, and reviewing. I worked closely with business analysts and managed a small team of engineers. My commitment to learning and growth in the industry was evident through my proactive approach and attention to detail on every project.`,
    technologies: [
      'JavaScript',
      'jQuery',
      'PHP',
      'Laravel',
      'MySQL',
      'Google Maps',
      'Browser extensions',
      'Web Scraping'
    ]
  }
]

function WorkExperience() {
  return (
    <div className="work-experience">
      {experience.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  )
}

export default WorkExperience
