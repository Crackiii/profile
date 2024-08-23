import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './index.css'
import ParticlesC from './Particles'
import About from './portfolio/about/About'
import Details from './portfolio/details/Details'
import Navigation from './portfolio/navigation/Navigation'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ParticlesC />
    <div className="index">
      <Router>
        <Navigation />
        <div className="portfolio">
          <Routes>
            <Route element={<Details />} path="/" />
            <Route element={<About />} path="/about" />
          </Routes>
        </div>
      </Router>
    </div>
  </React.StrictMode>
)

reportWebVitals()
