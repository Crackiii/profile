import Epilot from '../../images/work/epilot.png'
import Tamm from '../../images/work/tamm.jpg'
import Triumpho from '../../images/work/triupho.jpg'
import Vidy from '../../images/work/vidy2.png'
import './work-highlight.css'
function WorkHighlights() {
  return (
    <div className="work-highlight">
      <h2>✨ Work Highlights</h2>
      <div className="highlight">
        <div className="work-img">
          <img alt="highlight" src={Triumpho} />
        </div>
        <div className="content">
          <h3>Triumpho.ai - A plateform to make better version of self</h3>
          <div className="description">
            {`Triumpho is a platform that helps users to improve their mental
            health by providing them with various tools and techniques. It
            provides personalized recommendations based on user's preferences
            and requirements. It also provides a platform for users to connect
            with mental health professionals.`}
          </div>
          <div className="tags">
            <div className="tag">React Native</div>
            <div className="tag">Typescript</div>
            <div className="tag">NodeJS</div>
            <div className="tag">AWS</div>
            <div className="tag">SST</div>
          </div>
        </div>
      </div>

      <div className="highlight">
        <div className="work-img">
          <img alt="highlight" src={Epilot} />
        </div>
        <div className="content">
          <h3>
            Epilot.cloud - a cloud based software that allows you to map your
            entire processes digitally in a flexible and easy way.
          </h3>
          <div className="description">
            {`Working as a full-stack engineer at one of the leading energy-solution-based. 
             Collaborating with Product Managers, Customer Success team, Designers, and pairing with fellow Engineers to build end-to-end features.`}
          </div>
          <div className="tags">
            <div className="tag">React Native</div>
            <div className="tag">Typescript</div>
            <div className="tag">NodeJS</div>
            <div className="tag">AWS</div>
            <div className="tag">SST</div>
          </div>
        </div>
      </div>

      <div className="highlight">
        <div className="work-img">
          <img alt="highlight" src={Vidy} />
        </div>
        <div className="content">
          <h3>
            Vidy - enhances webpages by embedding videos within text, allowing
            seamless video viewing without leaving the page or disrupting
            reading.
          </h3>
          <div className="description">
            Vidy is a software product designed to enhance digital content by
            embedding videos directly into the text of webpages. It offers a way
            to overlay video content on top of text, allowing users to watch
            videos without leaving the page or disrupting their reading
            experience. The software integrates seamlessly into websites, making
            it possible to add interactive video content to articles, blogs, and
            other types of text-based content.
          </div>
          <div className="tags">
            <div className="tag">React Native</div>
            <div className="tag">Typescript</div>
            <div className="tag">NodeJS</div>
            <div className="tag">AWS</div>
            <div className="tag">SST</div>
          </div>
        </div>
      </div>

      <div className="highlight">
        <div className="work-img">
          <img alt="highlight" src={Tamm} />
        </div>
        <div className="content">
          <h3>
            Tamm.abudhabi - an online platform that serves as a one-stop portal
            for government services in the Emirate of Abu Dhabi, United Arab
            Emirates.
          </h3>
          <div className="description">
            {`It was developed as part of the Abu Dhabi government’s digital transformation efforts to provide residents, citizens, and businesses with seamless access to a wide range of public services.`}
          </div>
          <div className="tags">
            <div className="tag">React Native</div>
            <div className="tag">Typescript</div>
            <div className="tag">NodeJS</div>
            <div className="tag">AWS</div>
            <div className="tag">SST</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkHighlights
