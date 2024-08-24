import './footer.css'
import { useEffect, useRef } from 'react'

import { useAppContext } from '../../context/AppContext'
import Github from '../../images/social/github.png'
import Gitlab from '../../images/social/gitlab.png'
import Email from '../../images/social/gmail.png'
import LinkedIn from '../../images/social/linkedin.png'
import Medium from '../../images/social/medium.png'
import X from '../../images/social/x.png'
import Youtube from '../../images/social/youtube.png'

function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const { theme } = useAppContext()

  useEffect(() => {
    footerRef.current?.querySelectorAll('div').forEach((el) => {
      el.style.backgroundColor = theme === 'dark' ? '#ffffffbc' : ''
    })
  }, [theme])

  return (
    <div className="footer" ref={footerRef}>
      <a href="https://github.com/Crackiii" rel="noreferrer" target="_blank">
        <div>
          <img alt="Github" src={Github} />
        </div>
      </a>
      <a
        href="https://gitlab.com/nadeem.ahmad1"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <img alt="Gitlab" src={Gitlab} />
        </div>
      </a>
      <a href="mailto:nadeem.ahmad.na@outlook.com">
        <div>
          <img alt="Email" src={Email} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/nadeem-ahmad-167921156/"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <img alt="LinkedIn" src={LinkedIn} />
        </div>
      </a>
      <a
        href="https://medium.com/@nadeem.ahmad.na"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <img alt="Medium" src={Medium} />
        </div>
      </a>
      <a
        href="https://www.youtube.com/@NadyTheCoder"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <img alt="Youtube" src={Youtube} />
        </div>
      </a>
      <a href="https://x.com/IstNadeem" rel="noreferrer" target="_blank">
        <div>
          <img alt="X" src={X} />
        </div>
      </a>
    </div>
  )
}

export default Footer
