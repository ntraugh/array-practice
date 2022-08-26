import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>
        About Us
      </h1>
      <LoremIpsum p={2} />
    </section>
  )
}

export default About