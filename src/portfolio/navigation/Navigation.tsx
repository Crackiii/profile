import { useEffect } from 'react'
import './navigation.css'
import { NavLink } from 'react-router-dom'

function Navigation() {
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
  )
}

export default Navigation
