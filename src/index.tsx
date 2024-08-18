import React from 'react'
import ReactDOM from 'react-dom/client'

import ParticlesC from './Particles'
import Portifolio from './portfolio/Portfolio'
import reportWebVitals from './reportWebVitals'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ParticlesC />
    <div className="index">
      <Portifolio />
    </div>
  </React.StrictMode>
)

reportWebVitals()
