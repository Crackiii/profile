import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './about/About'
import Details from './details/Details'
import NotFound from './NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Details />,
    errorElement: <NotFound />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <NotFound />
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
