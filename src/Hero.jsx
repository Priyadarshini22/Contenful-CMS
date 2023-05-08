import React from 'react'


import heroImg from './assets/hero.svg'
export const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className='hero-title'>
                <h1>Contentful CMS</h1>
                <p>Helvetica shabby chic woke umami, pork belly iceland quinoa butcher marxism. Pop-up bushwick taxidermy unicorn art party post-ironic pinterest. Mlkshk organic taxidermy typewriter, slow-carb yes plz hashtag aesthetic hell of hammock small batch fixie raw denim. Forage praxis blue bottle</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="women and browser" className='img'></img>
            </div>
        </div>
    </section>
  )
}

export default Hero;
