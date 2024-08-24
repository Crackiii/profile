import { useEffect, useState } from 'react'
import './navigation.css'
import { NavLink } from 'react-router-dom'

import Moon from '../../images/theme/moon.png'
import Sun from '../../images/theme/sun.png'

function Navigation() {
  const [theme, setTheme] = useState('light')

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
      <div className="navigation-content">
        <div className="left-content">
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'navigation-item hovered-bg' : 'navigation-item'
            }}
            to={'/'}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'navigation-item hovered-bg' : 'navigation-item'
            }}
            to={'/about'}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'navigation-item hovered-bg' : 'navigation-item'
            }}
            to={'/blogs'}
          >
            Blogs
          </NavLink>
        </div>
        <div className="right-content">
          <div
            className="theme-switcher"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            onKeyDown={() => ''}
            role="button"
            tabIndex={0}
          >
            <img alt="Nadeem Ahmad" src={theme === 'light' ? Sun : Moon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
