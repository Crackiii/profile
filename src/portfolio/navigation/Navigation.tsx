import { useEffect } from 'react'
import './navigation.css'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  const navigate = useNavigate()

  useEffect(() => {
    // on scroll apply styles to the navigation
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const header = document.querySelector('.navigation')

      if (scrollTop > 80) {
        header?.classList.add('white-bg')
      } else {
        header?.classList.remove('white-bg')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="navigation">
      <div
        className="navigation-item"
        onClick={() => navigate('/')}
        onKeyDown={() => ''}
        role="button"
        tabIndex={0}
      >
        Home
      </div>
      <div
        className="navigation-item"
        onClick={() => navigate('/about')}
        onKeyDown={() => ''}
        role="button"
        tabIndex={0}
      >
        About
      </div>
      <div
        className="navigation-item"
        onClick={() => navigate('/about')}
        onKeyDown={() => ''}
        role="button"
        tabIndex={0}
      >
        Blogs
      </div>
    </div>
  )
}

export default Navigation
