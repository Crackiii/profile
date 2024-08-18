import React from 'react'
import ReactDOM from 'react-dom/client'

import ParticlesC from './Particles'
import Portifolio from './portfolio/Portfolio'
import reportWebVitals from './reportWebVitals'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <div
      style={{
        filter: 'blur(7px)',
        position: 'fixed',
        width: '100%',
        height: '100vh'
      }}
    >
      <ParticlesC />
    </div>
    <div className="index">
      <Portifolio />
    </div>
  </React.StrictMode>
)

reportWebVitals()
