import React from 'react'
import './Home.css'

const home = (props) => {
  return (
    <section className="Home">
      <div className="Home__hero" onClick={props.click}>
        <div className="Home__hero-header">
          <h1 className="Home__hero-header-h1">Yards & Gods</h1>
          <h2 className="Home__hero-header-h2">A Columbia, MO audio/visual studio</h2>
        </div>
      </div>
    </section>
  )
}

export default home
