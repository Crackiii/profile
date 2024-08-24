import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './index.css'
import AppContextProvider from './context/AppContext'
import ParticlesC from './Particles'
import About from './portfolio/about/About'
import Blogs from './portfolio/blogs/Blogs'
import Details from './portfolio/details/Details'
import Navigation from './portfolio/navigation/Navigation'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <AppContextProvider>
    <React.Fragment>
      <ParticlesC />
      <div className="index">
        <Router>
          <Navigation />
          <div className="portfolio">
            <Routes>
              <Route element={<Details />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Blogs />} path="/blogs" />
              <Route element={<div>Fun</div>} path="/fun" />
              <Route element={<div>404</div>} path="*" />
            </Routes>
          </div>
        </Router>
      </div>
    </React.Fragment>
  </AppContextProvider>
)

reportWebVitals()
