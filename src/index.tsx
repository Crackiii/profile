import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './index.css'
import AppContextProvider from './context/AppContext'
import ParticlesC from './Particles'
import About from './portfolio/about/About'
import Blogs from './portfolio/blogs/Blogs'
import Details from './portfolio/details/Details'
import Footer from './portfolio/footer/Footer'
import Navigation from './portfolio/navigation/Navigation'
import NotFound from './portfolio/NotFound'
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
              <Route element={<h3>Coming soon ...</h3>} path="/fun" />
              <Route element={<NotFound />} path="*" />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </React.Fragment>
  </AppContextProvider>
)

reportWebVitals()
