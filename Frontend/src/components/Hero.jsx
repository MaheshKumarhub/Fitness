import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero = () => {
  
  return (
    <section className='hero'>
      <div className="content">
        <div className="title">
            <h1>LET's</h1>
            <h1>GET</h1>
            <h1>Moving</h1>
        </div>
        <div className="sub-title">
            <p>Your Journey to Fitness Stars here</p>
            <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
       
        <AnchorLink href='#workout'><button>Start Your Journey</button></AnchorLink>
          
        <AnchorLink href='#pricing'> <button>Discover Your Plan</button></AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
