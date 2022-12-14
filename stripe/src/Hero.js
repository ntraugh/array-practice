import React from 'react'
import phone from "./images/phone.svg"
// importing our global context from our context file
import { useGlobalContext } from './context'

const Hero = () => {
  // bringing in closeSubmenu here because once the hero is mousedOver we will close our subMenu
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infastructure for the internet</h1>
          <p>
            Millions of companies of all sizes from startups to Fortune 500's use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.
          </p>
          <button className='btn'>
            Start Now
          </button>
        </article>
        <article className='hero-images'>
          <img src={phone} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero