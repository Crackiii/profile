import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './portfolio.css'
import About from './about/About'
import Details from './details/Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Details />
  },
  {
    path: '/about',
    element: <About />
  }
])

function Portfolio() {
  return (
    <div className="portfolio">
      <RouterProvider router={router} />
    </div>
  )
}

export default Portfolio
