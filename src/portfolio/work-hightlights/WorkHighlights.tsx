import Epilot from '../../images/work/epilot.png'
import Tamm from '../../images/work/tamm.jpg'
import Triumpho from '../../images/work/triupho.jpg'
import Vidy from '../../images/work/vidy2.png'
import './work-highlight.css'

const HightLights = [
  {
    title: 'Triumpho.ai - A plateform to make better version of self',
    description: `Triumpho is a platform that helps users to improve their mental
    health by providing them with various tools and techniques. It
    provides personalized recommendations based on user's preferences
    and requirements. It also provides a platform for users to connect
    with mental health professionals.`,
    tags: [
      'TypeScript',
      'React Native',
      'Node JS',
      'Docker',
      'GitHub',
      'AWS',
      'SST'
    ],
    image: Triumpho
  },
  {
    title:
      'Epilot.cloud - a cloud based software that allows you to map your entire processes digitally in a flexible and easy way.',
    description: `Working as a full-stack engineer at one of the leading energy-solution-based. 
    Collaborating with Product Managers, Customer Success team, Designers, and pairing with fellow Engineers to build end-to-end features.`,
    tags: [
      'JavaScript',
      'TypeScript',
      'React JS',
      'Node JS',
      'GraphQL',
      'Docker',
      'Postgres',
      'Gitlab',
      'CI/CD'
    ],
    image: Epilot
  },
  {
    title:
      'Vidy - enhances webpages by embedding videos within text, allowing seamless video viewing without leaving the page or disrupting reading.',
    description: `Vidy is a software product designed to enhance digital content by
    embedding videos directly into the text of webpages. It offers a way
    to overlay video content on top of text, allowing users to watch
    videos without leaving the page or disrupting their reading
    experience. The software integrates seamlessly into websites, making
    it possible to add interactive video content to articles, blogs, and
    other types of text-based content.`,
    tags: [
      'Svelte (TS)',
      'JavaScript',
      'React JS',
      'Node JS',
      'TypeScript',
      'SCSS',
      'GitHub'
    ],
    image: Vidy
  },
  {
    title:
      'Tamm.abudhabi - an online platform that serves as a one-stop portal for government services in the Emirate of Abu Dhabi, United Arab Emirates.',
    description: `Tamm was developed as part of the Abu Dhabi government’s digital transformation efforts to provide residents, citizens, and businesses with seamless access to a wide range of public services.`,
    tags: [
      'React',
      'Node',
      'TypeScript',
      'Docker',
      'Gitlab',
      'Microservice Architecture',
      'Swagger'
    ],
    image: Tamm
  }
]

function WorkHighlights() {
  return (
    <div className="work-highlight">
      <h2>✨ Work Highlights</h2>

      {HightLights.map((highlight, index) => (
        <div className="highlight" key={index}>
          <div className="work-img">
            <img alt="highlight" src={highlight.image} />
          </div>
          <div className="content">
            <h3>{highlight.title}</h3>
            <div className="description">{highlight.description}</div>
            <div className="tags">
              {highlight.tags.map((tag, index) => (
                <div className="tag" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkHighlights
